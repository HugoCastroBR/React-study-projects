import React, { Fragment, useContext } from 'react';
import Header from '../components/Header';
import { CartContext } from './../contexts/CartContext';




const Home = () => {
    const {
        states:{
        Cart,Error
        }
    ,dispatch} = useContext(CartContext)

    function Handler(event:any){
        event.preventDefault()
        dispatch({type:"Cart-Clean", payload:"oi"})
    }

    function HandlerChange (element:string,event:any){
        event.preventDefault()
        const payload = `{"${element}":1}`
        dispatch({type:"Cart-Add-Item", payload:JSON.parse(payload)})
    }

    return(
        <Fragment>
            <Header/>
            <main>
                <button
                onClick={
                    Handler
                }
                >Print</button>
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