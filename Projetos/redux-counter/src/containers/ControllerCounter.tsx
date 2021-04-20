import React,{ Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Add, Remove } from './../store/actions';

const ControllerCounter = () => {

    
    const dispatch = useDispatch()
    return(
        <Fragment>
            <button
            onClick={
                () => { dispatch(Add(1)) }
            }
            > Add 1 </button>

            <button
            onClick={
                () => { dispatch(Add(10)) }
            }
            > Add 10 </button>

            <button
            onClick={
                () => { dispatch(Remove(1)) }
            }
            > Remove 1 </button>

        </Fragment>
    )
}

export default ControllerCounter;