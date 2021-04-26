import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import api from "../services/api";
import { TProduct } from "../types/types";
import { SetCart, SetProducts } from './actions';


type TProductDispatch = {
    SetProducts?: (R:AxiosResponse<any>) => void
    SetCart?: (R:AxiosResponse<any>) => void
    payload: any; 
    type: string
}

export const getProducts = () => {
    return (dispatch:Dispatch<TProductDispatch>) => {
        api
            .get('/Products.json')
            .then(res => {
                dispatch(SetProducts(res.data))
                console.log('Produtos Obtidos do servidor')
            })
            .catch(() => {
                console.log("errr")
            })
    }
}

export const getCart = () => {
    return (dispatch:Dispatch<TProductDispatch>) => {
        api
            .get('/Cart.json')
            .then(res => {
                console.log(res.data)
                dispatch(SetCart(res.data))
                console.log('Cart Obtido do servidor')
            })
            .catch((err) => {
                console.log("errr")
                console.log(err)
            })
    }
}

export const refreshCart = (Cart:TProduct[]) => {
        const url = '/.json'
        const body = JSON.stringify({Cart:Cart})
        api
            .patch(url,body)
            .then(res => {
                console.log('Cart atualizado no servidor')
            })
            .catch(() => {
                console.log("errr")
            })
}