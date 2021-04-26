import { useSelector } from 'react-redux';
import store, { RootState } from '../store/store';
import { TCartSlice, TProductsSlice } from '../types/types';


export default function useProducts(){
    const productsDispatch = store.dispatch
    const AllStates = useSelector((state:RootState) => state )
    const productsState:TProductsSlice = AllStates.Products
    return {productsState , productsDispatch}
}