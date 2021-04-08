import * as React from 'react';



interface IingredientData{
    name: string,
    color: string,
    width?: number,
    height?: number
}

let IngredientsData:IingredientData[] = [];

function CreateIngredient(IngredientData:IingredientData){
    IngredientsData.push(IngredientData)
}


CreateIngredient({
    name: "Tomate",
    color: "red",
    width: 100,
    height: 40
})



export default IngredientsData;