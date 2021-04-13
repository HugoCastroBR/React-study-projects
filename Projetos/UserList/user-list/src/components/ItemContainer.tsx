import React from 'react';
import styled from 'styled-components'


const ItemContainerStyle = styled.div`
    background-color: white;
    height: auto;
    width: 600px;
    border-radius: 5px;
    margin-top: 16px;
`

const ItemContainer:React.FC = ({children}) => {
    return(
        <ItemContainerStyle>
            {children}
        </ItemContainerStyle>
    )
}

export default ItemContainer;