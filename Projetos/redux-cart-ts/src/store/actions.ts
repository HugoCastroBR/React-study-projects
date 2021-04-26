import { TProduct } from '../types/types';
import { cartActions } from './store';



export const ToggleCart = () => {
    return cartActions.TOGGLE_CART()
}

export const AddToCart = (element:TProduct,amount:number = 1) => {
    return cartActions.ADD_PRODUCT({element,amount})
}