import React from 'react';
import styled from 'styled-components';


const HeaderStyle = styled.header`
    width: 60vw;
    padding-left: 20vw;
    padding-right: 20vw;
    height: 80px;
    background-color: #3a393e;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    & button{
        transition: 0.6s;
        height: 50px;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 16px;
        color: #007ACC;
        background-color: transparent;
        border: 2px solid #007ACC;
        cursor: pointer;
        & h3{
            transition: 0.6s;
            margin: 0px;
            padding: 0px;
        }
        & span{
            transition: 0.6s;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 30px;
            border-radius: 20px;
            background-color: #007ACC;
            color: #3a393e;
            font-weight: 700;
        }
        
    }
    & button:hover{
        transition: 0.6s;
        background-color: #007ACC;
        & span{
            transition: 0.6s;
            background-color: #3a393e;
            color: #007ACC
        }
        & h3{
            transition: 0.6s;
            color: #3a393e;
        }
    } 
`

const Header = () => {
    return(
        <HeaderStyle>
            <h1>
                ReduxCart
            </h1>
            <button>
                <h3>My Cart</h3>
                <span>0</span>
            </button>
        </HeaderStyle>
    )
}

export default Header;