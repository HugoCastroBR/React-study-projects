import React,{Fragment} from 'react';
import {useSelector } from 'react-redux';
import { RootState } from '../reducers/CounterReducer'

const ShowCounter = () => {
    const state = useSelector((state:RootState) => state )

    return(
        <Fragment>
            <h1> {state.counter} </h1>
        </Fragment>
    )
}

export default ShowCounter;