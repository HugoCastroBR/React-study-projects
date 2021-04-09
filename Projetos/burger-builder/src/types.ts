import { IcurrentIngredients } from "./interfaces";

export type ContextValue = {
    ingredients: IcurrentIngredients[],
    setIngredients: (value : Object) => void;
}