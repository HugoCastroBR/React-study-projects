import {TCounterReducerAction, Tstate} from './../types/types';

const INITIAL_STATE:Tstate = {
    counter : 0
}



export default function CounterReducer(state:Tstate = INITIAL_STATE, action: TCounterReducerAction){
    console.log(action)
    const newState = {...state}
    switch(action.type){
        case 'ADD':
            const newCount = state.counter + action.payload
            newState.counter = newCount
            return newState
        default:
            return newState
    }
}

export type RootState = ReturnType<typeof CounterReducer>