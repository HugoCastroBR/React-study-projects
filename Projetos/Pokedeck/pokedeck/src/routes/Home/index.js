import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import styled  from 'styled-components';
import Theme from './../../containers/ThemeManager';
import PokeInfo from './../../components/PokeInfo/index';
import PokesList from '../../components/PokesList';


const HomeMainContainer = styled.main`
    width: 100vw;
    display: flex;
    justify-content: center;
`

const HomeContainer = styled.div`
    width: 40vw;
    min-height: calc(100vh - 60px);
    height: auto;
    background-color:${Theme.highlight};
`

const SearchPokeContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: center;
    height: 60px;
    align-items: center;
`

const SearchPokeInput = styled.input`
    background-color:${Theme.floatBackground};
    border: 1px solid ${Theme.floatBackground};
    height: 24px;
    width: 16vw;
    min-width: 300px;
    border-radius: 20px;
    display: flex;
    &::placeholder{
        padding-left: 10px;
    }
`





class Home extends Component {
    render() { 
        return ( 
        
        
        <Fragment>
            <Header/>
            <HomeMainContainer>
                <HomeContainer>

                    <SearchPokeContainer>
                        <SearchPokeInput placeholder="Search a pokemon"/>
                    </SearchPokeContainer>
                    <PokesList/>
                    
                </HomeContainer>
                <PokeInfo size={[false,'20vw']}/>
            </HomeMainContainer>
        </Fragment>
        
        );
    }
}

export default Home;