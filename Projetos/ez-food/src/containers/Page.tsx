import React from 'react';
import CartProvider from '../contexts/CartContext';


const Page:React.FC = ({children}) => {
    return(
        <CartProvider>
            {children}
        </CartProvider>
    )
}

export default Page;