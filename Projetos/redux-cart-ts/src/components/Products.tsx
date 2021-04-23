import React from 'react';
import styled from 'styled-components';
import { TProduct } from '../types/types';
import ProductItem from './ProductItem';
import useCart from './../hooks/useCart';
import { cartActions } from './../store/store';
import { AddToCart } from '../store/actions';


const ProductsContainerStyle = styled.div`
    margin-top: 10px;
    width: 70%;
    min-height: 200px;
    background-color: #3a393e;
    border: 1px solid #007ACC;
    border-radius: 10px;
    padding: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    
`

const Products: TProduct[] = [
    {
        name: "Sabão",
        description: "Limpa tudo",
        price: 2,
    },
    {
        name: "Pão",
        description: "Bom",
        price: 0.25,
    }
]



const ProductsContainer = () => {
    const { cartDispatch } = useCart()

    function HandlerAddToCart(element:TProduct){
        cartDispatch(AddToCart(element))
    }

    return(
        <ProductsContainerStyle>
            {Products.map((element, index) => <ProductItem key={index} {...element} HandlerAddToCart={HandlerAddToCart}/>)}
        </ProductsContainerStyle>
    )
}

export default ProductsContainer;