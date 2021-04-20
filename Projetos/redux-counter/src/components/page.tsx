import React from 'react';
import styled from 'styled-components';


interface IProps{
    justify: string
    align: string
}

const PageStyle = styled.div<IProps>`
    display:flex;
    flex-direction: column;
    align-items: ${(props) => `${props.align}`};  
    justify-content: ${(props) => `${props.justify}`};  
    width: calc(100vw - 15px);
    min-height: 100vh;
    background-color: #4d4d54;
    overflow: hidden;
`



const Page:React.FC<IProps> = (props) => {
    return(
        <PageStyle {...props}>
            {props.children}
        </PageStyle>        
    )
}

export default Page;    