import React, { createContext,useContext, useReducer } from 'react'
import reducer from './../reducers/CartReducer';





interface IStates{
    Cart: any[];
    Error: string;
    CartModal: boolean;
    
}
interface Icontext{
    states: IStates,
    dispatch: (value: object) => void;
}

export const CartContext = createContext<Icontext>({} as Icontext)


const INITIAL_STATE = {
    Cart: [],
    Error: '',
    CartModal: false
}


const CartProvider:React.FC = ({children}) =>{

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
