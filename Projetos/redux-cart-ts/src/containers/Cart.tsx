import React, { Fragment } from 'react';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import useCart from './../hooks/useCart';




const CartContainer = styled.div`
    margin-bottom: 10px;
    width: 70%;
    min-height: 200px;
    background-color: #3a393e;
    border: 1px solid #007ACC;
    border-radius: 10px;
    padding: 20px;
    height: auto;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    & h2{
        margin: 0px;
        color: white;
    }
    
`
// const ToggleCartBtn = styled.button`
//     margin: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 140px;
//     height: 40px;
//     font-size: 20px;
//     border: 2px solid white;;
//     background-color: transparent;
//     cursor: pointer;
//     border-radius: 10px;
//     color: white;
// `

const Cart = () => {
    const { cartStates } = useCart()
    return(
        <Fragment>
            {
            cartStates.CartVisible && 
            
            <CartContainer>
                <h2>Your shopping Cart</h2>
                {cartStates.Cart.map((element,index) => <CartItem {...element} key={index} />)}
            </CartContainer>  
            } 
            {/* <ToggleCartBtn>Toggle Cart</ToggleCartBtn> */}
        </Fragment>
    )
}

export default Cart;