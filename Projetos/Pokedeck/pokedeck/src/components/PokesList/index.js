import React, { Component } from "react";
import styled  from 'styled-components';
import PokeCard from './../PokeCard/index';


const PokesItemContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;



class PokesList extends Component {
    state = {pokes: []}
    

    componentDidMount(){
        let Self = this

        async function getPokes(){
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            const Solved = await res.json()
            Self.setState({
                pokes: Solved.results
            })

        }
        getPokes()
    }

    render() {
        return (
            <PokesItemContainer>
                {this.state.pokes.map((element,index) => <PokeCard key={index} poke={element}/>)}
            </PokesItemContainer>
        );
    }
}

export default PokesList;
