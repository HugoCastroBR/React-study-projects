import React,{ Fragment } from 'react';
import styled from 'styled-components';
import useStore from './../hooks/useStore';


const CounterText = styled.h1`
    color: white;    
`


const ShowCounter = () => {
    const { states } = useStore()

    return(
        <Fragment>
            <CounterText> {states.counter} </CounterText>
        </Fragment>
    )
}

export default ShowCounter;