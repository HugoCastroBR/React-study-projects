export type TFood = {
    name: string;
    price: number;
};

export type TcartItem = {
    food: TFood;
    count: number;
};

// export type Tcart = TcartItem[];