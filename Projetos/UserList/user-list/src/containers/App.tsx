import React, { useState } from "react";
import "../assets/css/App.css";
import styled from 'styled-components'
import AddUserForm from "./AddUserForm";
import ListUsers from "./ListUsers";
import ErrorModal from './../components/ErrorModal';


const Page = styled.main`
	width: 100vw;
	min-height: 65vh;
	background-color: #44464e;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 35vh;
`

interface UserInfos{
    name: string,
    age: number
}

const App:React.FC = () => {

	const [users , setUsers] = useState([] as UserInfos[])
	const [error, setError] = useState("" as string)

	const HandlerUsers = (newUser:UserInfos) => {
		console.log(newUser)
		const newUsers = [...users,newUser]
		console.log(newUsers)
		setUsers(newUsers)
	}

	const HandlerError = (msg:string) => {
		setError(msg)
	}

	return(
		<Page>
			{error && <ErrorModal ErrorMsg={error} HandlerError={HandlerError}/>}
			<AddUserForm HandlerUsers={HandlerUsers} HandlerError={HandlerError}/>
			<ListUsers users={users}/>
		</Page>
	)
}

export default App;
