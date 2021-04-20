import React from "react";
import { Fragment } from "react";
import Header from "./Header";
import styled from "styled-components";
import Page from "./page";
import { LoginAction } from './../store/actions';
import useStore from './../hooks/useStore';

export const FormStyled = styled.form`
	width: 360px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    justify-content: space-around;
    border: 2px solid white;
    border-radius: 20px;
    align-items: center;
    & input{
        width: 90%;
        height: 40px;
        border: 2px solid white;
        border-radius: 10px;
        background-color: transparent;
        color: white;

    }
    & input::placeholder{
        color: white;
        padding-left: 10px;
    }

    & div{
        height: 20%;
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
    & button{
        height: 40px;
        margin-left: 20px;
        margin-right: 20px;
        width: 120px;
        border: 2px solid white;
        background-color: transparent;
        border-radius: 100px;
        color: white;
        cursor: pointer;
        font-size: 16px;
        transition: 0.4s;
    }
    & button:hover{
        transition: 0.4s;
        background-color: white;
        color: #4d4d54;
    }

    & span{
        color: red;
    }
`;


const Login = () => {
    const { dispatch } = useStore()
	return (
		<Fragment>
			<Header />
			<Page align={"center"} justify={"center"}>
				<FormStyled action="">
					<input type="text" placeholder="Username" />
					<input type="text" placeholder="Password" />
					<div>
						<button
                        onClick={(event) => {
                            event.preventDefault()
                            const user =  {
                                name: "a",
                                password: "asd"
                            }
                            dispatch(LoginAction(user))
                        }}
                        >Entrar</button> 
						<button>Registrar</button>
                        
                        {/* 
                        if in login -> user and password true -> login
                        if in login -> user or password false -> error
                        if in register -> all infos correct -> login
                        if in register -> one info incorrect -> error
                        */}
					</div>
                    <span>Error</span>
				</FormStyled>
			</Page>
		</Fragment>
	);
};

export default Login;
