import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './reducer';


/* Create root reducer, containing all features of the application */




const store = configureStore({
    reducer:{
        Cart:cartSlice.reducer
    }
})


export default store
