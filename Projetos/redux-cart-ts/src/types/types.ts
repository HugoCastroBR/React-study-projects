


export type TProduct = {
    name: string;
    description: string;
    price: number;
    count?: number;
}

export type TCartSlice = {
    Cart: TProduct[];
    CartVisible: boolean;
}

