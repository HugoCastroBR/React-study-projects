import { TLoginUser } from "../types/types"


export const Add = (amount:number = 0) => {
    if(isNaN(amount)) amount = 0
    return {type:'ADD_COUNT',payload: amount}
}

export const Remove = (amount:number = 0) => {
    if(isNaN(amount)) amount = 0
    return {type:'ADD_COUNT',payload: -amount}
}




export const LoginAction = (user:TLoginUser = {} as TLoginUser) => {
    let userEmail:string = ''
    const VerifyUser = (user:TLoginUser) => {
        return true
    }

    let ValidUser:boolean = false

    if(user){
        ValidUser = VerifyUser(user)
        userEmail = 'uuu'
    }
    
    
    user.valid = ValidUser
    user.email = userEmail
    
    const payload = {user:{...user}}
    return {type: 'LOGIN', payload}
}