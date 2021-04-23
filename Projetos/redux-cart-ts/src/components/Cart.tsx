import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';



const CartContainer = styled.div`
    width: 70%;
    min-height: 200px;
    background-color: #3a393e;
    border: 1px solid #007ACC;
    border-radius: 10px;
    padding: 20px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2{
        margin: 0px;
        color: white;
    }
`


const Cart = () => {
    return(
        <CartContainer>
            <h2>Your shopping Cart</h2>
            <CartItem/>
        </CartContainer>
    )
}

export default Cart;