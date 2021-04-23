import { useSelector } from 'react-redux';
import store, { RootState } from '../store/store';
import { TCartSlice } from '../types/types';


export default function useCart(){
    const cartDispatch = store.dispatch
    const AllStates = useSelector((state:RootState) => state )
    const cartStates:TCartSlice = AllStates.Cart
    return {cartStates , cartDispatch}
}