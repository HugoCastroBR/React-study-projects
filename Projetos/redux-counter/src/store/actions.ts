import { TLoginUser } from "../types/types"
import { users } from './../users';
import { AuthActions, counterActions } from './store';




export const Add = (amount:number = 0) => {
    if(isNaN(amount)) amount = 0
    return counterActions.ADD_COUNT(amount)
}

export const Remove = (amount:number = 0) => {
    if(isNaN(amount)) amount = 0
    return counterActions.ADD_COUNT(-amount)
}




export const LoginAction =  (user:TLoginUser = {} as TLoginUser) => {
    let userEmail:string = ''
    const VerifyUser = (user:TLoginUser) => {
        console.log(users)
        const validly =  users.filter((element:TLoginUser) => element.name === user.name && element.password === user.password)
        console.log(validly)
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
    return AuthActions.LOGIN(payload)
}

export const RegisterAction =  (user:TLoginUser = {} as TLoginUser) => {
    let userEmail:string = ''
    const VerifyUser = (user:TLoginUser) => {
        const validly = users.filter((element:TLoginUser) => element.name === user.name || element?.email === user?.email)
        if(validly.length > 0){
            console.log(validly)
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
    return AuthActions.REGISTER(payload)
}


export const Logout = () => {
    return AuthActions.LOGOUT()
}

export const ClearLoginError = () => {
    return AuthActions.CLEAR_LOGIN_ERROR()
}


export const SetErrorMsg = (errorMsg:string) => {
    return AuthActions.SET_ERROR_MSG(errorMsg)
}
