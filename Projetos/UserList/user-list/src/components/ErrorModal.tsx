import React from 'react';
import styled from 'styled-components'


const ErrorModalStyle = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    top: 0px;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    
    & div{
        padding: 10px;
        width: 280px;
        height: 180px;
        background-color: white;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
    }

    & button{
        width: 100px;
        height: 30px;
        margin-top: 10px;
        cursor: pointer;
        border: none;
        background-color: #ffa600;
        color: white;
        padding-top: 2px;
        font-size: 18px;
        font-weight: 700;
    }
`

interface IProps{
    ErrorMsg: string;
    HandlerError: (ErrorMsg: string) => void;
}


const ErrorModal:React.FC<IProps> = ({ErrorMsg,HandlerError}) => {

    const ExitErrorModal =() =>{
        HandlerError('')
    }

    return(
        <ErrorModalStyle>
            <div>
                <h2>
                    {ErrorMsg}
                </h2>
                <button

                onClick={ExitErrorModal}

                >Ok</button>
            </div>
        </ErrorModalStyle>
    )
}

export default ErrorModal;