import React, { Fragment, useContext } from 'react';
import Header from '../components/Header';
import { CartContext } from './../contexts/CartContext';
import CartModal from './CartModal';




const Home = () => {
    const {dispatch,states} = useContext(CartContext)
    function Handler(event:any){
        event.preventDefault()
        dispatch({type:"Cart-Clean", payload:"oi"})
    }
    function HandlerChange (element:string,event:any,amount:number = 1){
        event.preventDefault()
        const payload = `{"${element}":${amount}}`
        dispatch({type:"Cart-Add-Item", payload:JSON.parse(payload)})
    }
    return(
        <Fragment>
            {states.CartModal && <CartModal/> }
            <Header/>
            <main>
                {/* Fazer a home ! */}
                <button
                onClick={
                    Handler
                }
                >Clear</button>
                <button
                    onClick={
                        (event) => HandlerChange('Arroz',event)
                    }
                >AAAA</button>
                <button
                    onClick={
                        (event) => HandlerChange('Feijao',event)
                    }
                >FFFF</button>
            </main>
        </Fragment>
    )
}

export default Home;