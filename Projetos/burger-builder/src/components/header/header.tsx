import * as React from 'react';
import styled  from 'styled-components';


const HeaderContainer = styled.header`
    width: 60vw;
    padding-left: 20vw;
    padding-right: 20vw;
    height: 60px;
    background-color: #da9f67;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 28px;
`


const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <div>Burger Builder</div>
            <div>Logo</div>
            <div>Menu</div>
        </HeaderContainer>
    )
}

export default Header;