import React, { createContext, ReactNode, useContext, useState } from 'react'
import IngredientsData from './../components/Ingredients/Ingredients';



interface IcurrentIngredients{
    ingredient: Object,
    count: number
}



type ContextValue = {
    ingredients: IcurrentIngredients[],
    setIngredients: (value : any) => void;
}

export const ingredientsContext = createContext<ContextValue>({
    ingredients:[{ingredient:{},count:0}],
    setIngredients: ingredients => console.log("error")
})

type Props = {
    children: ReactNode
}

export default function IngredientsProvider(props: Props){
    const [ingredients , setIngredients ] = useState<IcurrentIngredients[] | null>(null)
    const value = {
        ingredients,
        setIngredients
    }
    return(
        <ingredientsContext.Provider
        value={value as any}
        >
            {props.children}
        </ingredientsContext.Provider>
    )
};

export function useIngredients(){
    const context = useContext(ingredientsContext)
    const {ingredients, setIngredients} = context
    return {ingredients, setIngredients}
};

