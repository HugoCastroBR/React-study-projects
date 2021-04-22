import { TLoginUser } from "../types/types"
import { users } from './../users';



export const Add = (amount:number = 0) => {
    if(isNaN(amount)) amount = 0
    return {type:'ADD_COUNT',payload: amount}
}

export const Remove = (amount:number = 0) => {
    if(isNaN(amount)) amount = 0
    return {type:'ADD_COUNT',payload: -amount}
}




export const LoginAction =  (user:TLoginUser = {} as TLoginUser) => {
    let userEmail:string = ''
    const VerifyUser = (user:TLoginUser) => {
        const validly =  users.filter((element:TLoginUser) => element.name === user.name && element.password === user.password)
        if(validly.length > 0){
            userEmail = validly[0].email
            return true
        }else{
            return false
        }
    }

    let ValidUser:boolean = false

    if(user){
        ValidUser = VerifyUser(user)
    }
    
    
    user.valid = ValidUser
    user.email = userEmail


    const payload = {user:{...user}}
    return {type: 'LOGIN', payload}
}

export const RegisterAction =  (user:TLoginUser = {} as TLoginUser) => {
    let userEmail:string = ''
    const VerifyUser = (user:TLoginUser) => {
        const validly = users.filter((element:TLoginUser) => element.name === user.name || element.password === user.password)
        if(validly.length > 0){
            
            return false
        }else{
            return true
        }
    }

    let ValidUser:boolean = false

    if(user){
        ValidUser =  VerifyUser(user)
    }
    
    
    user.valid = ValidUser
    user.email = userEmail


    const payload = {userRegister:{...user}}
    return {type: 'REGISTER', payload}
}


export const ClearLoginError = () => {
    return {type: 'CLEAR_LOGIN_ERROR', payload:null}
}



