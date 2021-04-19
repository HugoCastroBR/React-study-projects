import { TFood } from "./types";
let foods:TFood[] = [
    {
        name:"Cheese Burger",
        price: 8.00,
        description: "Eita"
    },
    {
        name:"X Burger",
        price: 10.00
    },
    {
        name:"Egg Burger",
        price: 8.00
    },
    {
        name:"Gods Burger",
        price: 12.00,
        description: "God cry"
    },
    {
        name:"Double X Burger",
        price: 14.00
    },
    {
        name:"Double Gods Burger",
        price: 20.00
    },
]

async function getFoods(){
    const res = await fetch('https://ez-food-hc-default-rtdb.firebaseio.com/foods.json')
    const solved = await res.json()
    foods = solved
}


export default foods;