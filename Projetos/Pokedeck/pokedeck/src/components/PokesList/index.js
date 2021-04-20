import React, { Component } from "react";
import styled  from 'styled-components';
import PokeCard from './../PokeCard/index';
import Theme from './../../containers/ThemeManager';


const PokesItemContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const SeeMore = styled.button`
    margin: 25px;
    width: 200px;
    border: none;
    background-color: ${Theme.altFontColor};
    color :  ${Theme.highlight};
    font-size: 20px;
    height: 40px;
    cursor: pointer;
    border-radius: 50px;
    margin-right: calc(20vw - 115px);
    margin-left: calc(20vw - 115px);
`

class PokesList extends Component {
    limit = 2000
    state = {pokes: []}
    
    componentDidMount(){
        let Self = this
        async function getPokes(){
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${Self.limit}`)
            const Solved = await res.json()
            Self.setState({
                pokes: Solved.results
            })
        }
        getPokes()
    }

    getMorePokes = (event) => {
        event.preventDefault()
        const offset = this.state.pokes.length
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${offset}`
        let Self = this
        async function getPokes(){
            const res = await fetch(url)
            const Solved = await res.json()
            Self.setState({
                pokes: [...Self.state.pokes,...Solved.results]
            })
        }
        getPokes()
    }
    render() {
        return (
            <PokesItemContainer>
                {this.state.pokes.map((element,index) => <PokeCard key={index} poke={element}/>)}
                <SeeMore
                onClick={event => this.getMorePokes(event)}
                >Ver Mais</SeeMore>
            </PokesItemContainer>
        );
    }
}

export default PokesList;
