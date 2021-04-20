

export const Add = (amount:number = 0) => {
    if(isNaN(amount)) amount = 0
    return {type:'ADD',payload: amount}
}

export const Remove = (amount:number = 0) => {
    if(isNaN(amount)) amount = 0
    return {type:'ADD',payload: -amount}
}
