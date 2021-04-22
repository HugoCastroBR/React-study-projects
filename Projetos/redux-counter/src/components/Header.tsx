import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    width: 100vw;
    padding-left: calc((100vw - 1200px)/2);
    padding-right: calc((100vw - 1200px)/2);
    max-width: calc(1200px - 15px);
    background-color: rgba(100, 100, 200, 1);
    overflow: hidden;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    
    & a {
        padding-top: 8px;
        height: 32px;
        margin-left: 20px;
        margin-right: 20px;
        width: 120px;
        border: 2px solid white;
        background-color: transparent;
        border-radius: 100px;
        color: white;
        cursor: pointer;
        text-decoration: none;
    }
`



const Username = styled.h2`
    color: white;
`

const Header = () => {
    return(
        <HeaderContainer>
            
            <Link to="/login">Login</Link>
            <Username>User</Username>
            <Link to="/">Logout</Link>
            
        </HeaderContainer>
    )
}

export default Header;