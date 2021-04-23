import React from 'react';
import styled from 'styled-components';
import { TProduct } from '../types/types';



const ProductItemStyle = styled.div`
    border-bottom: 1px solid white;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    color: white;
    & h2{
        margin: 0px;
        color: white;
    }

    & div{
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 100%;

        & span{
            margin-top: 15px;
        }
    }

    & aside{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 30%;
        height: 100%;
        align-items: center;

        & p {
            margin: 0px;
            font-size: 30px;
            height: 60px;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            color: #3a393e;
            border-radius: 20px;
            font-weight: 700;
        }

        & button{
            width: 80%;
            height: 40px;
            border-radius: 5px;
            background-color: transparent;
            color: white;
            font-weight: 700;
            border: 2px solid white;
            margin-top: 80px;
            cursor: pointer;
        }
    }

`



type TPropsFunctionsOnly = {
    HandlerAddToCart: (element:TProduct) => void
}

type TProps = TPropsFunctionsOnly & TProduct;

const ProductItem:React.FC<TProps> = (props) => {
    return (
        <ProductItemStyle>
            <div>
                <h2>{props.name}</h2>
                <span>
                    {props.description}
                </span>
            </div>
            <aside>
                <p>
                    R$ {props.price.toFixed(2)}
                </p>
                <button
                onClick={
                    
                    () => {
                        const item = {
                            name: "Queijo",
                            description: "Nice",
                            price: 19.99
                        }
                        props.HandlerAddToCart(item)
                    }
                }
                >
                    Add to Cart
                </button>
            </aside>
        </ProductItemStyle>
    )
}

export default ProductItem;