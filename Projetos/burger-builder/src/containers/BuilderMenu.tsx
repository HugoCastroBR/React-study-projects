import React, { useState } from 'react';
import styled  from 'styled-components';
import IngredientsData from './../components/Ingredients/Ingredients';
import ListIngredients from './../components/IngredientOptions/ListIngredients';
import ManageIngredient from './../components/IngredientOptions/ManageIngredient';
import { useIngredients } from './../contexts/CurrentIngredients';


const BuilderMenuStyle = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 600px;
    
    min-height: 10px; // remover
`







const BuilderMenu:React.FC = () =>{

    let { ingredients, setIngredients } = useIngredients()



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