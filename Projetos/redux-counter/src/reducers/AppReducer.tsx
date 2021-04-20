import {TAppReducerAction, Tstate, TUser} from '../types/types';

const INITIAL_STATE:Tstate = {
    counter : 0,
    user: {} as TUser
}



export default function appReducer(state:Tstate = INITIAL_STATE, action: TAppReducerAction){

    const newState = {...state}

    switch(action.type){
        case 'ADD_COUNT':
            const newCount = state.counter + action.payload
            newState.counter = newCount
            return newState

        case 'LOGIN':
            console.log('login')
            const newUser = action.payload.user

            if(newUser.valid){
                console.log('Logado')
                newState.user = newUser
            }
            
            return newState
            
        default:
            return newState
    }
}

export type RootState = ReturnType<typeof appReducer>