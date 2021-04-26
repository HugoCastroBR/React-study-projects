import { configureStore } from "@reduxjs/toolkit"
import { CartSlice, ProductsSlice } from './reducers';

const store = configureStore({
    reducer:{
        Cart: CartSlice.reducer,
        Products: ProductsSlice.reducer
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>

export const cartActions = CartSlice.actions
export const ProductsActions = ProductsSlice.actions