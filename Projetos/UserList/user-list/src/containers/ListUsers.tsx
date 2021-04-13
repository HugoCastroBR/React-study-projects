/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components'
import ItemContainer from '../components/ItemContainer';
import { UserInfos } from './../ts/interfaces';

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
        cursor: pointer;
    }
`



interface IProps{
    users: UserInfos[];
    HandlerRemove: (indexToRemove:number) => void;
}

const ListUsers:React.FC<IProps> = ({users,HandlerRemove}) => {

    const RemoveHandle = (event:any) =>{
        const id = Number(event.target.closest('div').id)
        HandlerRemove(id)
    }

    return(
        <ItemContainer>
            <ListUsersStyle>
            <h2>Users: </h2>
            <hr/>
            {
                users.map((element, index) => {
                    return(
                        <div key={index} id={`${index}`}>
                            <span>{element.name} ({element.age} Years Old) </span>
                            
                            <a 
                            onClick={RemoveHandle}>
                            Remove</a>
                        </div>
                    )
                })
            }
            </ListUsersStyle>
        </ItemContainer>
    )
}

export default ListUsers;