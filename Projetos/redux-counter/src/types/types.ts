

export type TAppReducerAction ={
    type: string;
    payload: any
}

export type TUser = {
    name: string;
    email: string;
    password: string;
    valid?: boolean;
}

export type TLoginUser = {
    name: string;
    password: string;
    email?: string;
    valid?: boolean;
}

export type Tstate = {
    counter: number
    user:TUser
}