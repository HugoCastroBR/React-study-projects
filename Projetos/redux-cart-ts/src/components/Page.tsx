import React from 'react';
import styled from 'styled-components';



const PageContainer = styled.main`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 80px);
    background-color: #434345;
`

const Page:React.FC = ({children}) => {
    return(
        <PageContainer>
            {children}
        </PageContainer>
    )
}

export default Page;