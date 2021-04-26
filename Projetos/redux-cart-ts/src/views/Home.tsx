import React, { Fragment } from 'react';
import Header from '../containers/Header';
import Page from './../components/Page';
import styled from 'styled-components';
import Cart from '../containers/Cart';
import ProductsContainer from '../containers/Products';


const HomeContainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
`

const Home = () => {
    return(
        <Fragment>
            <Header/>
            <Page>
                <HomeContainer>
                    <Cart/>
                    <ProductsContainer/>
                </HomeContainer>
            </Page>
        </Fragment>
    )
}

export default Home;