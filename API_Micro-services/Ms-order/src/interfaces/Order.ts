export interface Order {
    orderId: string;
    restaurantId: string;
    customerEmail: string;
    delivererEmail: string;
    date: Date;
    menuId: string;
    dishId: string;
}