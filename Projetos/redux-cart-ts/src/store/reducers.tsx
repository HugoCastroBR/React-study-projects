import { createSlice, current } from '@reduxjs/toolkit'
import { TCartSlice, TProduct, TProductsSlice } from '../types/types'
import ValidCart from './../functions/ValidCart';



const initialState: TCartSlice = {
    Cart: [] as TProduct[],
    CartVisible: false
}

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        ADD_PRODUCT(state, actions) {
            // actions = index
            let Index: any = null
            const OldState = [...current(state.Cart)]
            OldState.forEach((element, index) => {
                if (element.name === actions.payload.element.name) {
                    Index = index
                }
            })
            let newItem = { ...actions.payload.element }
            let OldItem = OldState[Index]
            let amount = actions.payload.amount
            if (Index !== null) {
                if (OldItem.count) {
                    const count = OldItem.count
                    newItem.count = count + amount
                    if (newItem.count <= 0) {
                        console.log("deletando...")
                        OldState.splice(Index, 1)
                        state.Cart = OldState
                    } else {
                        OldState[Index] = newItem
                        state.Cart = OldState
                    }

                } else {
                    console.log("Isso é um erro")
                    newItem.count = amount
                    state.Cart.push(newItem)
                }

            } else {
                if (amount <= 0) {

                } else {
                    newItem.count = amount
                    state.Cart.push(newItem)
                }

            }

            // OldState.push(newItem)
            // console.log(OldState)
            // state.Cart.push(actions.payload)
        },

        SET_CART(state,actions) {
            if(actions.payload){
                const newCart = ValidCart([...actions.payload])
                state.Cart = newCart
            }else{
                console.log(actions.payload)
            }
            
        },

        TOGGLE_CART(state) {
            state.CartVisible = !state.CartVisible
        }
    }
})



const base:TProduct[] = [] as TProduct[]

const productsInitialState: TProductsSlice = {
    Products: base
}

export const ProductsSlice = createSlice({
    name: 'ProductsSlice',
    initialState: productsInitialState,
    reducers: {
        SET_PRODUCTS(state, actions) {
            state.Products = actions.payload
        }
    }
})