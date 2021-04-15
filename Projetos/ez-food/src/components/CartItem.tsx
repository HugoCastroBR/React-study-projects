import React from "react";
import styled from 'styled-components'
import { TFood } from "../ts/types";


const ModalCartItem = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #d0d0d0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ItemMainOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    justify-content: space-around;
    & h3{
        padding: none;
        margin: 0px;
        font-size: 24px;
    }
    & div{
        display: flex;
        align-items: center;
        & input{
            width: 30px;
            height: 25px;
            border-radius: 5px;
            border: 1px solid #9a9a9a;
            
            text-align: center;
            color: #4a4a4a;
            font-weight: 700;
            
        }

        & span{
            font-weight: 700;
            display: block;
            width: 30%;
            margin-top: -2px;
            font-size: 14px;
            color: #9f343d;
        }
        & span::before{
            content: "R$: "
        }
    }
`

const ItemCountOptions = styled.div`
    min-width: 100px;
    width: 20%;
    display: flex;
    justify-content: space-around;

    & button{
        height: 30px;
        border: 1px solid #9f343d;
        width: 40px;
        background-color: transparent;
        border-radius: 5px;
        color: #9f343d;
        font-size: 26px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s;
    }

    & button:hover{
        transition: 0.4s;
        background-color: #9f343d;
        color: white;
    }
`



interface Iprops{
    amount: number;
    addItemCart: (element:string,event:any,amount?:number) => void
    About: TFood;
}

const CartItem:React.FC<Iprops> = ({amount,addItemCart,About}) => {

	return(
        <ModalCartItem>
            <ItemMainOptions>
                <h3>{About.name}</h3>
                <div>
                    <span>{About.price.toFixed(2)}</span>
                    <input type="text" value={amount} onChange={
                        (event) => {
                            console.log(event.target.value)
                        }
                    }/>
                </div>
            </ItemMainOptions>
            <ItemCountOptions>
                <button  onClick={(event) => addItemCart(About.name,event,-1)}>-</button>
                <button
                onClick={(event) => addItemCart(About.name,event)}
                >+</button>
            </ItemCountOptions>
	    </ModalCartItem>
    )
};


export default CartItem;