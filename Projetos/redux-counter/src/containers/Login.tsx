import React, { useCallback, useEffect, useRef } from "react";
import { Fragment } from "react";
import Header from "./Header";
import styled from "styled-components";
import Page from "../components/page";
import { ClearLoginError, LoginAction, SetErrorMsg } from "../store/actions";
import useStore from "../hooks/useStore";
import { Link } from "react-router-dom";

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
	& input {
		width: 90%;
		height: 40px;
		border: 2px solid white;
		border-radius: 10px;
		background-color: transparent;
		color: white;
	}
	& input::placeholder {
		color: white;
		padding-left: 10px;
	}

	& div {
		height: 20%;
		width: 90%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	& button {
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
	& button:hover {
		transition: 0.4s;
		background-color: white;
		color: #4d4d54;
	}

	& span {
		color: red;
	}

	& a {
		padding-top: 8px;
		color: white;
		text-decoration: none;
		height: 32px;
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

	& a:hover {
		transition: 0.4s;
		background-color: white;
		color: #4d4d54;
	}
`;

const Login = () => {
	const { dispatch, states } = useStore();

	const CleanLoginErrorMsg = useCallback(() => {
		dispatch(ClearLoginError());
	}, [dispatch]);

	useEffect(() => {
		CleanLoginErrorMsg();
	}, [CleanLoginErrorMsg]);

	const [userName, password] = [
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
	];

	return (
		<Fragment>
			<Header />
			<Page align={"center"} justify={"center"}>
				<FormStyled action="">
					<input type="text" placeholder="Username" ref={userName} />
					<input type="text" placeholder="Password" ref={password} />
					<div>
						<Link
							onClick={(event) => {
								event.preventDefault();
								const user = {
									name: "",
									password: "",
								};

								if (
									userName.current?.value &&
									password.current?.value 
								) {
									user.name = userName.current?.value;
									user.password = password.current?.value;
									const item = LoginAction(user);
									dispatch(item);
								} else {
									dispatch(
										SetErrorMsg("Preencha todos os campos")
									);
								}

								
							}}
							to="/login"
						>
							Login
						</Link>

						<Link to="/register">Registrar</Link>

						{/* 
                        if in login -> user and password true -> login
                        if in login -> user or password false -> error
                        if in register -> all infos correct -> login
                        if in register -> one info incorrect -> error
                        */}
					</div>
					<span>{states.auth?.errorMsg}</span>
				</FormStyled>
			</Page>
		</Fragment>
	);
};

export default Login;
