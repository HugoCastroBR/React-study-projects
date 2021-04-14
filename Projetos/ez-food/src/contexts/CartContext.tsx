import React, { createContext, ReactNode,useContext, useReducer, useState } from 'react'
import { TcartItem } from '../ts/types';




interface IStates{
    Cart: TcartItem[]
    Error: string
}
interface Icontext{
    states: IStates,
    dispatch: (value: object) => void;
}

export const CartContext = createContext<Icontext>({} as Icontext)




const INITIAL_STATE = {
    Cart: [],
    Error: ''
}

function reducer(state:any, action:any){
    const newState = {...state}

    console.log(action,state)

    switch(action.type){
        case 'Cart-Clean':
            newState.Cart = []
            return newState

        case 'Cart-Add-Item':
            const newItem = action.payload
            newState.Cart = [...newState.Cart,newItem]
            return newState

        default:
            return newState
    }

}

const CartProvider:React.FC = ({children}) =>{
    // const [Cart , setCart ] = useState<TcartItem[] | null>(null)
    // const value = {
    //     Cart,
    //     setCart
    // }

    const [states, dispatch] = useReducer(reducer,INITIAL_STATE)

    return(
        <CartContext.Provider
        value={{states,dispatch}}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export function useCart(){
    const context = useContext(CartContext)
    const {states, dispatch} = context
    return {states, dispatch}
};
