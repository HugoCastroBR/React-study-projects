import React, { useCallback, useEffect, useRef } from 'react';
import Header from './Header';
import { Fragment } from 'react';
import Page from '../components/page';
import { FormStyled } from './Login';
import { Link } from 'react-router-dom';
import useStore from './../hooks/useStore';
import { ClearLoginError, RegisterAction, SetErrorMsg } from '../store/actions';

const Register = () => {

	const { states, dispatch } = useStore()
	
	const CleanLoginErrorMsg = useCallback(() => {
		dispatch(ClearLoginError())
	},[dispatch])

	useEffect(() => {
		CleanLoginErrorMsg()
	},[CleanLoginErrorMsg])

	const [userName, email, password,repeatPassword] = [
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null)
	]


	return (
		<Fragment>
			<Header />
			<Page align={"center"} justify={"center"}>
				<FormStyled action="">
					<input type="text" placeholder="Username" ref={userName} defaultValue=""/>
                    <input type="text" placeholder="Email" ref={email} defaultValue=""/>
					<input type="text" placeholder="Password" ref={password} defaultValue=""/>
                    <input type="text" placeholder="Repeat the password" ref={repeatPassword} defaultValue=""/>
                    
					<div>
						<Link to="/login">Login</Link>
						<Link 
						onClick={async (event) => {
                            event.preventDefault()

							const userRegister =  {
                                name: "",
                                password: "",
								email: ""
                            }

							if(userName.current?.value
								&& email.current?.value 
								&& password.current?.value
								&& repeatPassword.current?.value
								){
								if(password.current?.value === repeatPassword.current?.value){
									userRegister.name = userName.current?.value
									userRegister.email = email.current?.value
									userRegister.password = password.current?.value
									const item = RegisterAction(userRegister)
                            		dispatch(item)
								}else{
									dispatch(SetErrorMsg("Cerfique se que as senhas sao iguais"))
								}
								
							}else{
								dispatch(SetErrorMsg("Preencha todos os campos"))
							}
							

                            
							
                        }}
						to="/register">Registrar</Link>
					</div>
                    <span>{states.auth.errorMsg}</span>
				</FormStyled>
			</Page>
		</Fragment>
	);
};

export default Register;