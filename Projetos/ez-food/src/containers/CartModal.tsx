import React from 'react';
import styled from 'styled-components'
import { useCart } from './../contexts/CartContext';
import CartItem from './../components/CartItem';
import getAboutTheFood from './../assets/functions/getAboutThefood';



const ModalContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(55,55,55,0.5);
    display:flex;
    backdrop-filter: blur(2px);
    align-items: center;
    justify-content: center;
    z-index: 3;
`


const ModalItemsContainer = styled.div`
    width: 90vw;
    max-width: 500px;
    height:auto;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
`




const ModalOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    
    height: 80px;
    align-items: flex-end;
    justify-content: space-between;

`

const ModalCartTotal = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 20px;
    & :last-child::before{
        content: "R$: ";
    }

`

const ModalCartOptions = styled.div`
    width: 42%;
    display:flex;
    justify-content: space-between;
    
    & button{
        width: 100px;
        height: 35px;
        border-radius: 20px;
        background-color: transparent;
        border: 1px solid #9f343d;
        color: #9f343d;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: 0.4s;
    }
    & button:hover{
        transition: 0.4s;
        background-color: #9f343d;
        color: white;
    }

    & :last-child{
        transition: 0.4s;
        background-color: #9f343d;
        color: white;
    }

    
`





const CartModal = () => {

    const {dispatch,states} = useCart()

    const CartModalToggle = (event:any) => {
        event.preventDefault()
        dispatch({type:'Toggle-Cart-Modal'})
    }

    function AddItemCart (element:string,event:any,amount:number = 1){
        event.preventDefault()
        const payload = `{"${element}":${amount}}`
        dispatch({type:"Cart-Add-Item", payload:JSON.parse(payload)})
    }

    

    function CalcTotal(){
        let Cart = [...states.Cart]
        let value:any;

        if(Cart.length >= 1){
            Cart = Cart.map((element:any) => {
                const str = (Object.keys(element)[0])
                return {...getAboutTheFood(str), count:Object.values(element)[0]}
            })
            
            value = Cart.map((element:any) => {
                return element.price * element.count
            })
            const reducerCalc = (accumulator:any, currentValue:any) => accumulator + currentValue;
            value = value.reduce(reducerCalc)
            value = value.toFixed(2)
        }else{
            value = 0.00
        }
        
        return value
        
    }



    CalcTotal()
    return(
        <ModalContainer>
            <ModalItemsContainer>
            {states.Cart.map((element:any,index:number) => {
                return(
                    <CartItem 
                    amount={element[Object.keys(element)[0]]} 
                    About={getAboutTheFood(Object.keys(element)[0])}
                    addItemCart={AddItemCart}
                    key={index}
                    />
                )
                })
            }
            
                <ModalOptions>
                    <ModalCartTotal>
                        <span>Total Amount: </span>
                        <span>{CalcTotal()}</span>
                    </ModalCartTotal>
                    
                    <ModalCartOptions>
                        <button
                        onClick={CartModalToggle}
                        >
                            Close
                        </button>
                        <button>
                            Order
                        </button>
                    </ModalCartOptions>
                </ModalOptions>
            </ModalItemsContainer>
        </ModalContainer>
    )
}

export default CartModal;