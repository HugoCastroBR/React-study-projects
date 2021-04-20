import { createStore } from 'redux'
import appReducer from '../reducers/AppReducer';


const store = createStore(appReducer)


export default store;