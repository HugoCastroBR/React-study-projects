import React, { useCallback, useEffect } from 'react';
import Header from '../components/Header';
import { Fragment } from 'react';
import Page from '../components/page';
import { FormStyled } from './Login';
import { Link } from 'react-router-dom';
import useStore from './../hooks/useStore';
import { ClearLoginError, RegisterAction } from '../store/actions';

const Register = () => {

	const { dispatch,states } = useStore()
	
	const CleanLoginErrorMsg = useCallback(() => {
		dispatch(ClearLoginError())
	},[dispatch])

	useEffect(() => {
		CleanLoginErrorMsg()
	},[CleanLoginErrorMsg])

	return (
		<Fragment>
			<Header />
			<Page align={"center"} justify={"center"}>
				<FormStyled action="">
					<input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
					<input type="text" placeholder="Password" />
                    <input type="text" placeholder="Repeat the password" />
                    
					<div>
						<Link to="/login">Login</Link>
						<Link 
						onClick={async (event) => {
                            event.preventDefault()
                            const userRegister =  {
                                name: "Hugo",
                                password: "1s23",
								email: "aaa"
                            }
							const item = RegisterAction(userRegister)
                            dispatch(item)
                        }}
						to="/register">Registrar</Link>
					</div>
                    {/* <span>{states?.errorMsg}</span> */}
				</FormStyled>
			</Page>
		</Fragment>
	);
};

export default Register;