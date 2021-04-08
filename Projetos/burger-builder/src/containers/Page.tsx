import React from 'react';
import styled  from 'styled-components';


const MainPageContainer = styled.main`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
`

const Page: React.FC = ({children}) =>{
    return(
        <MainPageContainer>
            {children}
        </MainPageContainer>
    )
}

export default Page;