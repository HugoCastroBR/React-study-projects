import { createStore } from 'redux'
import appReducer, { counterSlice } from '../reducers/AppReducer';


const store = createStore(counterSlice.reducer)


export default store;