import React from 'react';
import styled  from 'styled-components';
import IngredientsData from './Ingredients/Ingredients';
import ListIngredients from './IngredientOptions/ListIngredients';
import ManageIngredient from '../containers/ManageIngredient';



const BuilderMenuStyle = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 600px;
    min-height: 10px; // remover
`


const BuilderMenu:React.FC = () =>{
    return(
        <BuilderMenuStyle>
            <ListIngredients>
            {IngredientsData.map((element,index) => {
                return(
                    <ManageIngredient {...element} key={index}/>
                )
            })}
            </ListIngredients>
        </BuilderMenuStyle>
    )
}

export default BuilderMenu;