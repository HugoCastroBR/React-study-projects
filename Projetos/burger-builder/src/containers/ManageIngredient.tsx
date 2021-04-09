
import * as React from 'react';
import styled  from 'styled-components';
import { useIngredients } from '../contexts/CurrentIngredients';
import { IingredientData } from '../interfaces';




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
        cursor: pointer;
    }
`



const ManageIngredient = (ingredient:IingredientData) =>{


    let { ingredients, setIngredients } = useIngredients()

    

    const HandlerIngredient = (ingredient:string, add:boolean) => {
        let operator:number = -1;
        if(add){
            operator = 1
        }
        if(ingredients){
            let exist = false
            const newIngredients = ingredients.map((element,index) => {
                if(element?.ingredient === ingredient){
                    exist = true
                    if(element.count === 0 && !add){
                        return element
                    }
                    return {ingredient: element.ingredient,count: element.count + (1 * operator)}
                }else{
                    return element
                }
            })
            if(!exist && add){
                setIngredients([...ingredients,{
                    "ingredient":ingredient,
                    "count": 1
                }])
                
            }else{
                setIngredients(newIngredients)
                
            }
            
        }
        else if(add){
            setIngredients([{
                "ingredient":ingredient,
                "count": 1
                
            }])
            console.log("isso")
        }
        else{
            setIngredients([{
                "ingredient":ingredient,
                "count": 0
            }])
        }

    }

    function getCount(ingredient:string){
        const new_ingredient = ingredients?.filter(element => element.ingredient === ingredient)
        
        return new_ingredient && new_ingredient[0]?.count
    }

    return(
        <IngredientOptions>
            <div>
                {ingredient?.name}
            </div>
            <IngredientManageCount>
                <button
                onClick={
                    () => HandlerIngredient(ingredient?.name,false)
                }
                >-</button>
                <span>{
                    getCount(ingredient?.name) ? getCount(ingredient?.name) : 0
                }
                </span>
                <button
                    onClick={
                        () => HandlerIngredient(ingredient?.name,true)
                    }
                >+</button>
            </IngredientManageCount>
        </IngredientOptions>
    )
}

export default ManageIngredient;