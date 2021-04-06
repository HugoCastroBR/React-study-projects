import React, { Component } from "react";
import styled from "styled-components";
import Theme from "./../../containers/ThemeManager";

const Poke = styled.div`
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
            <Poke>
                <PokeImageContainer>
                    <img src={this.image} />
                </PokeImageContainer>
                <h3>{this.props.poke.name}</h3>
                <div>{this.state.poke.name}</div>
            </Poke>
        );
    }
}

export default PokeCard;
