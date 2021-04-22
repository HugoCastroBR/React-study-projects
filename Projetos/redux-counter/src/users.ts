
import { TUser } from "./types/types"



export const users:TUser[] = [
    {
        name:"Hugo",
        email: "hugoecastro2008@hotmail.com",
        password: "123"
    }
]


export const registerUser = (user:TUser) => {
    users.push(user)
}