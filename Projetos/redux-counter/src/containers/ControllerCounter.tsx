import React from 'react';
import { Add, Remove } from './../store/actions';
import useStore from './../hooks/useStore';
import styled from 'styled-components';



const ActionButton = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 50px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.4s;

    &:hover{
        transition: 0.4s;
        background-color: white;
        color: rgba(100,100,200,1);
    }
`

const ActionButtonContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 600px;
    justify-content: space-around;
    height: 100%;
    align-items: center;

`


const ControllerCounter = () => {

    
    const { dispatch } = useStore()
    return(
        <ActionButtonContainer>
            <ActionButton
            onClick={
                () => { dispatch(Add(1)) }
            }
            > Add 1 </ActionButton>

            <ActionButton
            onClick={
                () => { dispatch(Add(10)) }
            }
            > Add 10 </ActionButton>

            <ActionButton
            onClick={
                () => { dispatch(Remove(1)) }
            }
            > Remove 1 </ActionButton>

        </ActionButtonContainer>
    )
}

export default ControllerCounter;