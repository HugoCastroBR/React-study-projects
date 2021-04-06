import React, { Component } from 'react';
import styled  from 'styled-components'
import Theme from './../../containers/ThemeManager';



const HeaderContainer = styled.header`
    width: 60vw;
    padding-left: 20vw;
    padding-right: 20vw;
    height: 60px;
    background-color:${Theme.highlight};
    display: flex;
    justify-content: space-between;
`
const HeaderItems = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    & h1{
        color: ${Theme.altFontColor};
        font-size: 30px
    }
    & a {
        color: ${Theme.altFontColor};
        font-size: 20px;
        text-decoration: none;
    }

`

class Header extends Component {

    render() { 
        return ( 
            <HeaderContainer>
                <HeaderItems>
                    <h1>PokeDeck</h1>
                </HeaderItems>
                <HeaderItems>
                    <a href="/">See my deck</a>
                </HeaderItems>
            </HeaderContainer>
        );
    }
}

export default Header;