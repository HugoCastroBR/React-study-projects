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
        ADD_PRODUCT(state, actions){
            state.Cart.push(actions.payload)
        },

        INCREASE_PRODUCT(state,actions){
            // actions = index
            let Index:any = null
            const OldState = current(state.Cart)
            OldState.forEach((element,index) => {
                if(element.name === actions.payload.name){
                    console.log("achou")
                    Index = index
                }
            })
            
            // if(Index !== null){
            //     const item = {...state.Cart[Index]}
            //     console.table(Object.entries(item))
            //     if(item.count){
            //         item.count ++
            //         state.Cart[Index] = item
            //     }else{
            //         item.count = 1
            //     }
            // }else{
            //     state.Cart.push(actions.payload)
            // }

            const newItem = {...actions.payload}
            const OldItem = OldState[Index]
        
            if(Index){
                if(Object.keys(OldItem).includes('count')){
                    if(OldState[Index] !== undefined){
                        let OldCount = OldState[Index].count
                        if(OldCount === undefined){OldCount = 1}
                        console.log(OldState[Index].count)
                        OldState[Index].count += 1
                    }
                }else{
                    newItem.count = 1
                    state.Cart.push(newItem)
                }
            }else{
                newItem.count = 1
                state.Cart.push(newItem)
            }
            
            console.log(OldState[Index],Index)
            
            
        },

        TOGGLE_CART(state){
            state.CartVisible = !state.CartVisible
        }   
    }
})

