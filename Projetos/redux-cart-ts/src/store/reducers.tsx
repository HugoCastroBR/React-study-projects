import { createSlice, current } from '@reduxjs/toolkit'
import { TCartSlice, TProduct } from '../types/types'



const initialState:TCartSlice = {
    Cart : [] as TProduct[],
    CartVisible: false
}

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        ADD_PRODUCT(state,actions){
            // actions = index
            let Index:any = null
            const OldState = [...current(state.Cart)]
            OldState.forEach((element,index) => {
                if(element.name === actions.payload.element.name){
                    Index = index
                }
            })
            let newItem = {...actions.payload.element}
            let OldItem = OldState[Index]
            let amount = actions.payload.amount
            if(Index !== null){
                if(OldItem.count){
                    const count = OldItem.count
                    newItem.count = count + amount
                    if(newItem.count <= 0){
                        console.log("a")
                        OldState.splice(Index,1)
                        state.Cart = OldState
                    }else{
                        OldState[Index] = newItem
                        state.Cart = OldState
                    }
                    
                }else{
                    console.log("Isso é um erro")
                    newItem.count = amount
                    state.Cart.push(newItem)
                }

            }else{
                if(amount <= 0){
                    
                }else{
                    newItem.count = amount
                    state.Cart.push(newItem)
                }
                
            }

            // OldState.push(newItem)
            // console.log(OldState)
            // state.Cart.push(actions.payload)
        },

        TOGGLE_CART(state){
            state.CartVisible = !state.CartVisible
        }   
    }
})

