import React, { useState } from 'react';
import styled  from 'styled-components';
import IngredientsData from './../components/Ingredients/Ingredients';
import ListIngredients from './../components/IngredientOptions/ListIngredients';
import ManageIngredient from './../components/IngredientOptions/ManageIngredient';


const BuilderMenuStyle = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 600px;
    background-color: #da9f67;
    min-height: 10px; // remover
`



interface IcurrentIngredients{
    "ingredient" : Object,
    "count": number
}

const BuilderMenu:React.FC = () =>{
    const[currentIngredients, setCurrentIngredients] = useState<IcurrentIngredients | undefined>(undefined);

    return(
        <BuilderMenuStyle>
            <ListIngredients>
            {IngredientsData.map(element => {
                return(
                    <ManageIngredient ingredient={element}/>
                )
            })}
            </ListIngredients>
        </BuilderMenuStyle>
    )
}

export default BuilderMenu;