import {Dish} from "./Dish";

export interface Menu {
    menuId: string;
    restaurantId: string;
    name: string;
    price: number;
    description: string;
    dishes: Dish[];
}