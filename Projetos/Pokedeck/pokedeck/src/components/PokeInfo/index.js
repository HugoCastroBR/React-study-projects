import React, { Component, Fragment } from 'react';
import styled  from 'styled-components';
import Theme from './../../containers/ThemeManager';


const PokeInfoContainer = styled.div`
    width: ${props => props.size[1]?props.size[1]:'200px'};
    height: 60px;
    background-color:${Theme.highlight};
`

class PokeInfo extends Component {

    render() { 
        return ( 
            <PokeInfoContainer size={this.props.size}>
                
            </PokeInfoContainer>
        );
    }
}

export default PokeInfo;