export type TFood = {
    name: string;
    price: number;
    description?: string;
};

export type TcartItem = {
    food: string;
    count: number;
};

// export type Tcart = TcartItem[];