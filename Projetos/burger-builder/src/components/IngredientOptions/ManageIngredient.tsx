
import * as React from 'react';
import styled  from 'styled-components';
import { useIngredients } from './../../contexts/CurrentIngredients';
import IngredientsData from './../Ingredients/Ingredients';
interface IingredientData{
    name: string,
    color: string,
    width?: number,
    height?: number
}


const IngredientOptions = styled.div`
    background-color: #da9f67;
    display:flex;
    flex-direction: row;
    padding: 2px 0px 3px 0px;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
`
const IngredientManageCount = styled.div`
    width: 100px;
    display:flex;
    justify-content: space-between;
    color: white;
    margin-right: 2px;
    align-items: center;
    & button{
        border: none;
        width: 20px;
        height: 20px;
    }
`



const ManageIngredient = (ingredient:IingredientData) =>{


    let { ingredients, setIngredients } = useIngredients()

    

    const HandlerIngredient = (ingredient:string) => {
        console.log(ingredient)
        // console.log(IngredientsData.filter(element => element.name == ingredient))
        
        if(ingredients){
            let countNumber = 0
            let exist = false
            const newIngredients = ingredients.map((element,index) => {
                if(element?.ingredient == ingredient){
                    exist = true
                    return {ingredient: element.ingredient,count: element.count + 1}
                }else{
                    return element
                }
            })
            if(!exist){
                setIngredients([...ingredients,{
                    "ingredient":ingredient,
                    "count": countNumber
                }])
            }else{
                setIngredients(newIngredients)
            }
            
        }
        else{
            setIngredients([{
                "ingredient":ingredient,
                "count": 0
            }])
        }
        console.log(ingredients)
    }

    return(
        <IngredientOptions>
            <div>
                {ingredient?.name}
            </div>
            <IngredientManageCount>
                <button
                onClick={
                    () => HandlerIngredient(ingredient?.name)
                }
                >-</button>
                <span>{
                    ingredients?.filter(element => element.ingredient == ingredient?.name)
                }
                </span>
                <button>+</button>
            </IngredientManageCount>
        </IngredientOptions>
    )
}

export default ManageIngredient;