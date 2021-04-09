import React from 'react';
import styled  from 'styled-components';
import IngredientsProvider from '../contexts/CurrentIngredients';


const MainPageContainer = styled.main`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
`

const Page: React.FC = ({children}) =>{
    return(
        <MainPageContainer>
            <IngredientsProvider>
                {children}
            </IngredientsProvider>
        </MainPageContainer>
    )
}

export default Page;