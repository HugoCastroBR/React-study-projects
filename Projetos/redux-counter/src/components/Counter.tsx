import React from 'react';
import ControllerCounter from '../containers/ControllerCounter';
import ShowCounter from '../containers/ShowCounter';
import styled from 'styled-components'
import Page from './page';

const CounterStyle = styled.div`
    max-width: 1200px;
    width: 80vw;
    height: 300px;
    background-color: red;
`




const Counter = () => {
    return(
        <Page align={'center'} justify={'center'}>
            <CounterStyle>
                <ShowCounter/>
                <ControllerCounter/>
            </CounterStyle>
        </Page>
    )
}

export default Counter;