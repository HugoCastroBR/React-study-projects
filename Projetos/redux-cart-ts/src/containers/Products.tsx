import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TProduct } from '../types/types';
import ProductItem from '../components/ProductItem';
import useCart from '../hooks/useCart';
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

// const Products: TProduct[] = [
//     {
//         name: "Sabão",
//         description: "Limpa tudo",
//         price: 2,
//     },
//     {
//         name: "Pão",
//         description: "Bom",
//         price: 0.25,
//     }
// ]



const ProductsContainer = () => {
    const { cartDispatch } = useCart()


    const [products, setProducts] = useState([])

    const getProducts = async () => {
        
        const url = 'https://60837f885dbd2c001757b7aa.mockapi.io/v1/products'
        const res = await fetch(url)
        let solved = await res.json()
        solved = solved.map((element:any) => {
            delete element.id
            return element
        })
        setProducts(solved)
        
    } 


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {getProducts()},[])

    function HandlerAddToCart(element:TProduct,amount:number = 1){
        cartDispatch(AddToCart(element,amount))
    }

    return(
        <ProductsContainerStyle>
            {products?.map((element, index) => <ProductItem key={index} {...element} HandlerAddToCart={HandlerAddToCart}/>)}
        </ProductsContainerStyle>
    )
}

export default ProductsContainer;   