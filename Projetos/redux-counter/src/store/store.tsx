
import { configureStore } from '@reduxjs/toolkit';
import counterSlice, { authSlice }  from './../reducers/AppReducer';


const store = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer,
            auth: authSlice.reducer
        }
    }
)

export const counterActions = counterSlice.actions
export const AuthActions = authSlice.actions
export default store;
export type RootState = ReturnType<typeof store.getState>