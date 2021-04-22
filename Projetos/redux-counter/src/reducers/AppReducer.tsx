import {TUser} from '../types/types';
import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../users';
import { users } from './../users';

// const initialState:Tstate = {
//     counter : 0,
//     user: {} as TUser,
//     errorMsg: ""
// }


const counterSlice = createSlice({
    name: 'counter',

    initialState:{
        counter:0
    },

    reducers: {
        ADD_COUNT(state,actions){
            state.counter += actions.payload
        },


    }
})


export const authSlice = createSlice({
    name: 'Auth',
    initialState:{
        user: {} as TUser,
        errorMsg: ""
    },
    reducers:{
        CLEAR_LOGIN_ERROR(state){
            console.log("Limpando")
            state.errorMsg = ""
        },
        LOGIN(state,actions){

            console.log('login')
            console.log(users)

            const newUser = actions.payload.user
            console.log(newUser)
            if(newUser.valid){
                console.log('Logado')
                state.user = newUser
            }else{
                state.errorMsg = "Usuario ou senha invalido"
            }
            
        },
        REGISTER(state,actions){
            const newRegister= actions.payload.userRegister
            console.log(newRegister)
            if(newRegister.valid){
                console.log('registrando')
                registerUser(newRegister)
                console.log(users)
            }
        },
        SET_ERROR_MSG(state,actions){
            state.errorMsg = actions.payload
        },
        LOGOUT(state){
            state.user = {} as TUser
        }
    }
})

export default counterSlice


// export function appReducer(state:Tstate = INITIAL_STATE, action: TAppReducerAction){

//     const newState = {...state}

//     switch(action.type){

//         case 'LOGIN':
//             console.log('login')
//             const newUser = action.payload.user

//             if(newUser.valid){
//                 console.log('Logado')
//                 newState.user = newUser
//             }else{
//                 newState.errorMsg = "Usuario ou senha invalido"
//             }
            
//             return newState   

//         case 'REGISTER':
//             const newRegister= action.payload.userRegister
//             console.log(newRegister)
//             if(newRegister.valid){
//                 console.log('registrando')
//             }
//             return newState
            
//         default:
//             return newState
//     }
// }

