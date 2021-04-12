import React,{ useState } from 'react';
import styled from 'styled-components'
import ItemContainer from '../components/ItemContainer';



const AddUserFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 580px;
    padding: 10px;
    height: 100%;

    & input{
        margin-top: 5px;
        padding: 0px;
        margin: none;
        width: calc(100% - 5px);
        height: 30px;
        font-size: 20px;
    }
    & div{
        width: 100%;
    }

    & button{
        width: 100px;
        height: 30px;
        margin-top: 10px;
        cursor: pointer;
        border: none;
        background-color: #ffa600;
        color: white;
        padding-top: 2px;
        font-size: 18px;
        font-weight: 700;
    }
    & label{
        margin-top: 5px;
        font-size: 18px;
        font-weight: 700;
    }
`

interface UserInfos{
    name: string,
    age: number
}

interface IProps{
    HandlerUsers: (newUser:UserInfos) => void;
    HandlerError: (Error_msg:string) => void;
}


const AddUserForm:React.FC<IProps> = ({HandlerUsers,HandlerError}) => {
    const [currentUser, setCurrentUser] = useState({
        name: "",
        age: 0
    } as UserInfos)
    const HandleChangeAge = (event: Object) => {
        setCurrentUser({
            name: currentUser.name,
            age: event.target.value
        })
    }
    const HandleChangeName = (event: Object) => {
        setCurrentUser({
            name: event.target.value,
            age: currentUser.age
        })
    }
    const HandleSumbit = (event: any) => {
        event.preventDefault()
        if(currentUser.name.length < 3){
            HandlerError("Insert a valid name")
        }else if(currentUser.age < 1){
            HandlerError("Insert a valid age")
        }else{
            HandlerUsers(currentUser)
        }
    }

    return(
        <ItemContainer>
            <AddUserFormStyle action="">
                <label htmlFor="">Name:</label>
                <input type="text"
                    onChange={HandleChangeName}
                />
                <label htmlFor="">Age:</label>
                <input type="number"
                    onChange={HandleChangeAge}
                />

                <div>
                    <button
                    onClick={HandleSumbit}
                    >
                        Add
                    </button>
                </div>
            </AddUserFormStyle>
        </ItemContainer>
    )
}

export default AddUserForm;