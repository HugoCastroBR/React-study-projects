/* eslint-disable array-callback-return */
import * as React from 'react';
import Bread from './../components/Bread/Bread';
import styled  from 'styled-components';
import IngredientsData from './../components/Ingredients/Ingredients';
import { useIngredients } from './../contexts/CurrentIngredients';

interface Props{
    color?: string,
    width?: number,
    height?: number,
    count?: number
}

// const Div: StyledFunction<React.HTMLProps<HTMLDivElement>> = styled.div;





const IngredientStyle = styled.div<Props>`
    background-color: ${(props) => `${props.color}`};
    width: ${(props) => props.width ? `${props.width}%` : "20%"};
    height: ${(props) => props.height ? `${props.height * (props.count?props.count:1)}px` : "20px"};
    border: 1px solid black;
`
// const Ingredient: React.FC<Props> = ({
//     color,
//     width,
//     height,
//     count
// }) => {return(

//     <IngredientStyle/>

// )}

const Builder: React.FC = () => {
    
    const { ingredients } = useIngredients()

    const getAboutIngredient = (ingredient:string) => 
    IngredientsData.filter(element => element.name === ingredient)

    const Recount = () =>{
        const toRender:any[] = []
        ingredients?.map((element,index) => {
            const count = element.count
            if(count){
                const elementName:string = element.ingredient
                for(let i = 0; i < count; i++){
                    toRender.push(getAboutIngredient(elementName))
                }
                
            }
        })
        return toRender
    }


    




    return(
        <Bread>
            {
                
                Recount()?.map((element, index) => {      
                    return <IngredientStyle  key={index} {...getAboutIngredient(element[0].name)[0]} count={1}/>        
                })
            }
        </Bread>
    )
}   

export default Builder;