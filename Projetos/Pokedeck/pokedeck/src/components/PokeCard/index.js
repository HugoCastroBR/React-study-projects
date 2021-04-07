import React, { Component } from "react";

import Poke from "../poke/poke";

import { usePokemon } from './../../contexts/pokemon';



class PokeCard extends Component {
    state = { poke: {} };
    
    componentDidMount() {
        let Self = this;

        async function getPokes() {
            const res = await fetch(Self.props.poke.url);
            const Solved = await res.json();

            Self.setState({
                poke: Solved,
            });
        }
        getPokes();
    }

    image = this.state.poke.sprites
        ? this.state.poke.sprites["front_default"]
        : false;

    

    render() {
        try {
            this.image = this.state.poke.sprites.front_default;
        } catch (err) {
            this.image = null;
        }
        return (
            <Poke poke={this.state.poke}/>
        );
    }
}

export default PokeCard;
