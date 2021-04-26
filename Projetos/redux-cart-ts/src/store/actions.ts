import { TProduct } from '../types/types';
import { cartActions, ProductsActions } from './store';



export const ToggleCart = () => {
    return cartActions.TOGGLE_CART()
}

export const AddToCart = (element:TProduct,amount:number = 1) => {
    return cartActions.ADD_PRODUCT({element,amount})
}

export const SetProducts = (elements:TProduct[]) => {
    return ProductsActions.SET_PRODUCTS(elements)
}

export const SetCart = (elements:TProduct[],) => {
    return cartActions.SET_CART(elements)
}