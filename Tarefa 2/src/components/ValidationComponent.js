import React, { Component } from 'react';


class ValidationComponent extends Component {

    render() { 
        return ( 
            <p>{this.props.value.length < 5? 'Text too short' : 'Text too long'}</p>
        );
    }
}
 
export default ValidationComponent;