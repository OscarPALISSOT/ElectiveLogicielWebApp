export interface Delivery {
    deliveryId: string;
    orderId: string;
    restaurantId: string;
    customerEmail: string;
    delivererEmail: string;
    date: Date;
    dishId: string;
    price: number;
    address: string;
    city: string;
    country: string;
    status: string;
}