import React, { createContext, ReactNode, useContext, useState } from 'react'
import {
    IcurrentIngredients,
} from '../interfaces';
import {
    ContextValue,
} from '../types';


export const ingredientsContext = createContext<ContextValue>({} as ContextValue)

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
        value={value as ContextValue}
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

