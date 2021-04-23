import React from 'react';
import styled from 'styled-components';
import { TProduct } from '../types/types';



const CartItemStyle = styled.div`
    margin-top: 20px;
    padding: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: 80%;
    height: 200px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    color: white;;
    & section{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & h3{
            font-size: 36px;
            margin: 0px;
        }
        & p{
                font-size: 32px;
                font-weight: 700
            }
        & p::before{
                content:"x";
                margin-right: 4px;
                font-size: 24px;
            }
        & div{
            width: 200px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            & h4{
                margin: 0px;
                font-size: 22px;
            }
            & span{
                margin-top: 6px;
                font-size: 14px;
            }
            & button{
                transition: 0.4s;
                display: flex;
                justify-content:center;
                align-items: center;
                width: 60px;
                height: 50px;
                background-color: transparent;
                border: 2px solid white;
                color: white;
                font-size: 30px;
                border-radius: 10px;
                cursor: pointer;
            }
            & button:hover{
                transition: 0.4s;
                color: gray;
                background-color: white;
            }
        }
    }
`

const CartItem:React.FC<TProduct> = (props) => {
    return(
        <CartItemStyle>
            <section>
                <h3>{props.name}</h3>
                <div>
                    <h4>R$ {props.price.toFixed(2)}</h4>
                    <span>(R$ {props.price.toFixed(2)}/item)</span>
                </div>
            </section>

            <section>
                <p>{props?.count}</p>
                <div>
                    <button>-</button>
                    <button>+</button>
                </div>
            </section>
        </CartItemStyle>
    )
}

export default CartItem;