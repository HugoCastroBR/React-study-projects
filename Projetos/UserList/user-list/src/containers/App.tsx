import React, { useState } from "react";
import "../assets/css/App.css";
import styled from 'styled-components'
import AddUserForm from "./AddUserForm";
import ListUsers from "./ListUsers";
import ErrorModal from './ErrorModal';
import { UserInfos } from './../ts/interfaces';

const Page = styled.main`
	width: 100vw;
	min-height: 65vh;
	background-color: #44464e;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 35vh;
`



const App:React.FC = () => {
	

	const [users , setUsers] = useState([] as UserInfos[])
	const [error, setError] = useState("" as string)

	const HandlerUsers = (newUser:UserInfos) => {
		const newUsers = [...users,newUser]
		setUsers(newUsers)
	}

	const HandlerError = (msg:string) => {
		setError(msg)
	}

	const HandlerRemove = (index: number) => {
		const newUsers = [...users]
		newUsers.splice(index,1);
		setUsers(newUsers)
		
	}

	return(
		<Page>
			{error && <ErrorModal ErrorMsg={error} HandlerError={HandlerError}/>}
			<AddUserForm HandlerUsers={HandlerUsers} HandlerError={HandlerError}/>
			{users[0] && <ListUsers users={users} HandlerRemove={HandlerRemove}/>}
		</Page>
	)
}

export default App;
