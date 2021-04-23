import React from 'react';
import styled from 'styled-components';



const PageContainer = styled.main`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
`

const Page:React.FC = ({children}) => {
    return(
        <PageContainer>
            {children}
        </PageContainer>
    )
}

export default Page;