import React from 'react';
import styled from 'styled-components'
import ItemContainer from '../components/ItemContainer';


const ListUsersStyle = styled.div`
    width: 580px;
    padding: 10px;
    & h2{
        margin: 0px;
    }
    & div{
        width: 100%;
        display: flex;
        justify-content: space-between
    }
    & a {
        text-decoration: none;
        color: red;
    }
`

interface UserInfos{
    name: string,
    age: number
}

interface IProps{
    users: UserInfos[]
}

const ListUsers:React.FC<IProps> = ({users}) => {
    return(
        <ItemContainer>
            <ListUsersStyle>
            <h2>Users: </h2>
            <hr/>
            {
                users.map((element, index) => {
                    return(
                        <div key={index}>
                            <span>{element.name} ({element.age} Years Old) </span>
                            <a href="/">Remove</a>
                        </div>
                    )
                })
            }
            </ListUsersStyle>
        </ItemContainer>
    )
}

export default ListUsers;