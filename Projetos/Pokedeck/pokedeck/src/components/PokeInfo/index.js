import React, { Component } from 'react';
import styled  from 'styled-components';
import Theme from './../../containers/ThemeManager';
import { usePokemon } from './../../contexts/pokemon';


const PokeInfoContainer = styled.div`
    position: fixed;
    padding-top: 70px;
    margin-left: 60vw;
    width: ${props => props.size[1]?props.size[1]:'200px'};
    height: ${props => props.size[0]?props.size[0]:'auto'};
    background-color: ${Theme.highlight};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Theme.altFontColor};
`

const PokeImageContainer = styled.div`
    width: 400px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        width: 350px;
        height: 350px;
        max-width: 350px;
        max-height: 350px;
    }
    
`;

const PokeMainStats = styled.div`
    width: 400px;
    max-height: 100px;
    font-size: 22px;
    display: flex;
    justify-content: space-around;
    & h2{
        font-size: 30px;
    }
`

const PokeStats = styled.div`
    margin-top: 30px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Theme.altFontColor};
`

function PokeInfo(props){
    let { pokemon } = usePokemon()
    console.log(pokemon.pokemon)
    if(pokemon.pokemon){
        return ( 
            <PokeInfoContainer size={['82vh',props.size]}>
                <PokeImageContainer>
                    <img src={pokemon.pokemon.sprites.front_default}/>
                </PokeImageContainer>
                <span>
                    {   pokemon.pokemon.id}
                </span>
                <PokeMainStats>
                    <h2>
                    {   pokemon.pokemon.name}
                    </h2>
                    
                </PokeMainStats>
                <PokeMainStats>
                    <span>
                        Height: {(parseInt(pokemon.pokemon.height) * 0.1).toFixed(2)}m
                    </span>
                    <span>
                        Weight: {(parseInt(pokemon.pokemon.weight) * 0.1).toFixed(1)}kg
                    </span>
                </PokeMainStats>
                <PokeStats>
                    {pokemon.pokemon.stats.map((element,index) => {
                        return(
                            <span>
                                Base {element.stat.name}: {element.base_stat}
                            </span>
                        )
                    })}
                </PokeStats>
                <PokeStats>
                    {pokemon.pokemon.types.map((element,index) => {
                        return(
                            <span>
                                {element.type.name.toUpperCase()}
                            </span>
                        )
                    })}
                </PokeStats>
                
            </PokeInfoContainer>
        );
    }
    else{
        return(null)
    }
}

export default PokeInfo;