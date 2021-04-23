import { configureStore } from "@reduxjs/toolkit"
import { CartSlice } from './reducers';

const store = configureStore({
    reducer:{
        Cart: CartSlice.reducer
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>

export const cartActions = CartSlice.actions