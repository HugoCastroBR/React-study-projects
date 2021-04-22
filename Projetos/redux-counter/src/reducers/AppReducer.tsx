import {TAppReducerAction, Tstate, TUser} from '../types/types';
import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE:Tstate = {
    counter : 0,
    user: {} as TUser,
    errorMsg: ""
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers:{
        ADD_COUNT(state,action){
            console.log(state.counter)
            state.counter += action.payload
        },
        CLEAR_LOGIN_ERROR(state){
            state.errorMsg = ""
        }
    }
})

export const {ADD_COUNT, CLEAR_LOGIN_ERROR} = counterSlice.actions
export default counterSlice.reducer


export function appReducer(state:Tstate = INITIAL_STATE, action: TAppReducerAction){

    const newState = {...state}

    switch(action.type){

        case 'LOGIN':
            console.log('login')
            const newUser = action.payload.user

            if(newUser.valid){
                console.log('Logado')
                newState.user = newUser
            }else{
                newState.errorMsg = "Usuario ou senha invalido"
            }
            
            return newState   

        case 'REGISTER':
            const newRegister= action.payload.userRegister
            console.log(newRegister)
            if(newRegister.valid){
                console.log('registrando')
            }
            return newState
            
        default:
            return newState
    }
}

export type RootState = ReturnType<typeof appReducer>