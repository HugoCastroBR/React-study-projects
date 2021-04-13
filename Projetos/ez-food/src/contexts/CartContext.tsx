import React, { createContext, ReactNode,useContext, useState } from 'react'
import { TcartItem } from '../ts/types';


interface Icontext{
    Cart: TcartItem[],
    setCart: (value: object) => void;
}

export const CartContext = createContext<Icontext>({} as Icontext)




const CartProvider:React.FC = ({children}) =>{
    const [Cart , setCart ] = useState<TcartItem[] | null>(null)
    const value = {
        Cart,
        setCart
    }
    return(
        <CartContext.Provider
        value={value as Icontext}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export function useIngredients(){
    const context = useContext(CartContext)
    const {Cart, setCart} = context
    return {Cart, setCart}
};
