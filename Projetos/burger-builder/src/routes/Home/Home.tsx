import React from 'react';
import styled  from 'styled-components';
import Page from '../../components/Page';
import Builder from './../../containers/Builder';
import BuilderMenu from '../../components/BuilderMenu';



const HomeContainer = styled.div`
    margin-top: 60px;
    width: 60vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Home: React.FC = () =>{
    return(
        <Page>
            <HomeContainer>
                <Builder/>
                
                <BuilderMenu/>
            </HomeContainer>
        </Page>
        
    )
}

export default Home;