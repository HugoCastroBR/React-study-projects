
import { TFood } from '../../ts/types';
import foods from '../../ts/foods';

export default function getAboutTheFood(food:string) {
    const result = foods.filter((element:any) => element.name === food)
    const resultFood:TFood = {
                    name:result[0].name,
                    price:result[0].price}
    return resultFood
}