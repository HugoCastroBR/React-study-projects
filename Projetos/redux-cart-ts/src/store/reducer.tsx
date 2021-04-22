import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        Items: [],
    },
    reducers: {
        ADD(state) {
            console.log(state)
        },
    },
})
