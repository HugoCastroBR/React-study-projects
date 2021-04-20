import { useSelector } from 'react-redux';
import { RootState } from '../reducers/AppReducer';
import store from '../store/store';


export default function useStore(){
    const dispatch = store.dispatch
    const states = useSelector((state:RootState) => state )
    return {states , dispatch}
}