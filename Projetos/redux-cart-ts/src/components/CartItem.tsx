import React from 'react';
import styled from 'styled-components';



const CartItemStyle = styled.div`
    margin-top: 20px;
    padding: 20px;
    width: 80%;
    height: 220px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    color: white;;
    & section{
        width: 100%;
        display: flex;
        
        justify-content: space-between;

    }
`

const CartItem = () => {
    return(
        <CartItemStyle>
            <section>
                <h3>Teste Item </h3>
                <div>
                    <h4>18.00</h4>
                    <span>(6.00/item)</span>
                </div>
            </section>
            <section>
                <p>x3</p>
                <div>
                    <button>-</button>
                    <button>+</button>
                </div>
            </section>
        </CartItemStyle>
    )
}

export default CartItem;