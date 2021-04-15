import styled from 'styled-components'
import * as React from 'react';
import { ReactComponent as CartIcon } from'../assets/img/shopping-cart.svg'
import { useCart } from '../contexts/CartContext';
import getAboutTheFood from './../assets/functions/getAboutThefood';

const HeaderContainer = styled.header`
    width: 60vw;
    padding: 0vw 20vw 0vw 20vw;
    height: 80px;
    background-color: #9f343d;
    display:flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    z-index: 2;
    overflow-x: hidden;
    & button{
        width: 240px;
        height: 40px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 20px;
        border: none;
        background-color: transparent;
        color: white;
        font-size: 18px;
        cursor: pointer;
        border: 1px solid white;
    }
`

const CartIconStyled = styled(CartIcon)`
    width: 25px;
` 

const Header = () => {

    const {dispatch,states} = useCart()

    const CartModalToggle = (event:any) => {
        event.preventDefault()
        dispatch({type:'Toggle-Cart-Modal'})
    }

    function CalcCount(){
        let Cart = [...states.Cart]
        let value:any;

        if(Cart.length >= 1){
            Cart = Cart.map((element:any) => {
                const str = (Object.keys(element)[0])
                return {...getAboutTheFood(str), count:Object.values(element)[0]}
            })
            
            value = Cart.map((element:any) => {
                return element.count
            })
            const reducerCalc = (accumulator:any, currentValue:any) => accumulator + currentValue;
            value = value.reduce(reducerCalc)
            
        }else{
            value = 0
        }
        
        return value
    }

    return(
        <HeaderContainer>
            <h1>Ez-Food</h1>
            <button onClick={CartModalToggle}>
                <CartIconStyled fill="white"/>
                {/* <img src={CartIcon} alt=""/> */}
                <span>Your Cart</span>
                <span>{Math.ceil(CalcCount())}</span>
            </button>
        </HeaderContainer>
    )
}


export default Header;