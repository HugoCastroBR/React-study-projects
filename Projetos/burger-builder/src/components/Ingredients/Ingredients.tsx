import * as React from 'react';



interface IingredientData{
    name: string,
    color: string,
    width?: number,
    height?: number
}

let IngredientsData:IingredientData[] = [
    {
        name: "Tomato",
        color: "red",
        width: 100,
        height: 40
    },
    {
        name: "Alface",
        color: "green",
        width: 100,
        height: 30
    },
    {
        name: "Meat",
        color: "brown",
        width: 100,
        height: 50
    },
    {
        name: "Cheese",
        color: "yellow",
        width: 100,
        height: 20
    }
];

function CreateIngredient(IngredientData:IingredientData){
    IngredientsData.push(IngredientData)
}






export default IngredientsData;