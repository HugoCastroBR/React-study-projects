import styled from 'styled-components'
import * as React from 'react';
import { ReactComponent as CartIcon } from'../assets/img/shopping-cart.svg'

const HeaderContainer = styled.header`
    width: 60vw;
    padding: 0vw 20vw 0vw 20vw;
    height: 80px;
    background-color: #9f343d;
    display:flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    & button{
        width: 240px;
        height: 40px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 20px;
        border: none;
        background-color: #534e4e;
        color: white;
        font-size: 18px;
        cursor: pointer;
    }
`

const CartIconStyled = styled(CartIcon)`
    width: 25px;
` 



const Header = () => {
    return(
        <HeaderContainer>
            <h1>Ez-Food</h1>
            <button>
                <CartIconStyled fill="white"/>
                {/* <img src={CartIcon} alt=""/> */}
                <span>Your Cart</span>
                <span>0</span>
            </button>
        </HeaderContainer>
    )
}


export default Header;