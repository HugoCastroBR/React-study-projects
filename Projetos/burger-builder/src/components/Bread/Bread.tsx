import * as React from 'react';
import styled  from 'styled-components';

const BreadStyle = styled.div`
    display: flex;
    width: 600px;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const BreadTop = styled.div`
    width: 100%;
    height: 150px;
    background-color: #da9f67;
    border-radius: 200% 200% 10px 10px;
`

const BreadBottom = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 5px 5px 40px 40px;
    background-color: #da9f67;
`

const Bread: React.FC = ({children}) => {
    return(
        <BreadStyle>
            <BreadTop/>
                {children}
            <BreadBottom/>
        </BreadStyle>
    )
}

export default Bread;