import React from 'react';
import Theme from "./../../containers/ThemeManager";
import styled from "styled-components";
import { usePokemon } from './../../contexts/pokemon';

const PokeStyle = styled.div`
    width: 300px;
    height: 400px;
    background-color: ${Theme.floatBackground};
    border: solid 1px ${Theme.floatBorder};
    border-radius: 16px;
    transition: 0.5s;
    cursor: pointer;
    margin: 15px;
    display: flex;
    flex-direction: column;

    &:hover {
        transition: 0.5s;
        transform: translateY(-10px) scale(1.02);
    }
    & div:last-child {
        height: 60px;
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        align-items: flex-start;
    }
    & h3 {
        margin: none;
        padding: none;
        height: 40px;
        display: flex;
        flex-wrap: wrap;
        font-size: 30px;
        align-items: center;
        justify-content: center;
    }
`;
const PokeImageContainer = styled.div`
    width: 300px;
    height: 250px;
    display: flex;
    justify-content: center;

    align-items: center;
    & img {
        width: 250px;
        height: 250px;
        max-width: 250px;
        max-height: 250px;
    }
`;



function Poke(props) {
    let { setPokemon} = usePokemon()
    
    const handlerPokemon = (pokemon = false) => {

        pokemon && setPokemon({pokemon})

    }
    if(props.poke){
        return (
            <PokeStyle
                onClick={() => {
                    handlerPokemon(
                        props.poke
                    )
                }}
                className="PokeContainer"
                data-url={props.poke.url}
            >
                <PokeImageContainer>
                    <img src={props.poke.sprites && props.poke.sprites.front_default} alt="poke" />
                </PokeImageContainer>
                <h3>{props.poke.name}</h3>

            </PokeStyle>
        );
    }
    else{
        return null
    }
    
}


export default Poke;