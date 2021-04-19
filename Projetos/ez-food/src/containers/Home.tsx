import React, { Fragment, useCallback, useEffect } from 'react';
import Header from './Header';
import { useCart } from './../contexts/CartContext';
import CartModal from './CartModal';
import styled from 'styled-components'
import BurgerBackground from '../assets/img/BurgerBackground.jpg'
import ItemSelector from './ItemSelector';
import { TFood } from '../ts/types';



const HomeContainer = styled.main`
    width: 100vw;
    height: auto;
    min-height:calc(100vh - 80px);
    background-color: #9f343d;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`

const ImageContainer = styled.div`
    margin-left: -5vw;
    width: 120vw;
    margin-top: -10vh;
    height: calc(60vh - 80px);
    background-color: red;
    background-size: cover;
    background-position: center;
    background-image: url(${BurgerBackground});
    background-repeat: no-repeat;
    transform: rotate(-4deg);
    z-index: 1;
    overflow-x: hidden;
`


const AboutContainer = styled.div`
    width: 90vw;
    max-width: 600px; 
    height: auto;
    display:flex;
    padding: 20px;
    padding-bottom: 40px;
    flex-direction: column;
    z-index: 2;
    margin-top: -100px;
    background-color: rgba(55,55,55,0.70);
    border: 2px solid rgba(55,55,55,0.90);
    backdrop-filter: blur(20px);
    border-radius: 10px;
    align-items: center;
    overflow-x: hidden;
    & h3{
        color: white;
        font-size: 2.8vh;
        padding: none;
        margin: 0px;
        margin-bottom: 20px;
    }
    & span{
        width: 100%;
        font-size: 1.6vh;
        color: white;
        text-align: justify;
    }
`

const ItemSelectContainer = styled.div`
    padding: 30px;
    margin-top: 60px;
    width: calc(90vw - 60px);
    max-width: 800px;
    height: auto;
    min-height: 100px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    margin-bottom: 100px;
`




const Home = () => {
    const {dispatch,states} = useCart()
    

    function addItemCart (element:string,event:any,amount:number = 1){
        event.preventDefault()
        const payload = `{"${element}":${amount}}`
        dispatch({type:"Cart-Add-Item", payload:JSON.parse(payload)})
    }

    const getFoods = useCallback(async () => {
        const res = await fetch('https://ez-food-hc-default-rtdb.firebaseio.com/foods.json')
        const solved = await res.json()
        dispatch({type:"Set-Foods",payload:solved})
    },[dispatch])

    

    useEffect(() =>{ getFoods()},[getFoods])

    return(
        <Fragment>
            {states.CartModal && <CartModal/> }
            <Header/>
            <HomeContainer>
                <ImageContainer>

                </ImageContainer>

                <AboutContainer>
                    <h3>The most easy food order application</h3>
                    <span>Order you food now we delivery that too you as fast as we can</span>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi maxime exercitationem eligendi asperiores, iste praesentium soluta temporibus ut deserunt tempore at dolores fugit quasi qui. Recusandae quidem eligendi quam porro.</span>
                </AboutContainer>


                <ItemSelectContainer>
                    {states.foods?.map((element:TFood,index:number) => {
                        return <ItemSelector  
                        key={index}
                        {...element}
                        addItemCart ={addItemCart}
                        />
                    })}
                </ItemSelectContainer>
                


            </HomeContainer>
        </Fragment>
    )
}

export default Home;