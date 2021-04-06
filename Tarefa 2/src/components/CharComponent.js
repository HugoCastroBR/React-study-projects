import React, { Component } from 'react';

class CharComponent extends Component {
    render() { 
        const myStyle = {
                        display: 'inline-block',
                        padding: '16px',
                        textAlign: 'center',
                        margin: '16px',
                        border: '1px solid black'
                        }
        return ( 
        <span 
        onClick={
            () => {this.props.DeleteValue(this.props.id)}
        }

        style={myStyle}>{this.props.letter}</span> 
        );
    }
}

export default CharComponent;