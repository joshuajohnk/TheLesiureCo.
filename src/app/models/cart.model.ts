export interface Cart{
    items: Array<cartItem>;
}

export interface cartItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
}