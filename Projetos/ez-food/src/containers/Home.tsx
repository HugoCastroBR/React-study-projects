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
    
    function HandlerChange ( event:any){
        event.preventDefault()
        
        dispatch({type:"Cart-Add-Item", payload:{
            food:{
                name:"arroz",
                price:10
            },
            count:1
        }})
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
                        HandlerChange
                    }
                >Change</button>
            </main>
        </Fragment>
    )
}

export default Home;