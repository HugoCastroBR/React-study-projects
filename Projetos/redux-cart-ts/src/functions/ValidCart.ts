import { TProduct } from "../types/types";

const ValidCart = (cart:[] | TProduct[]) => {
    const NewCart = cart.filter(element => element != null)
    return NewCart
}

export default ValidCart;