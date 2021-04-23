import { TProduct } from '../types/types';
import { cartActions } from './store';



export const ToggleCart = () => {
    return cartActions.TOGGLE_CART()
}

export const AddToCart = (element:TProduct) => {

    
        return cartActions.INCREASE_PRODUCT(element)
    
}