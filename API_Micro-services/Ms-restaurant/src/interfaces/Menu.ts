import {Dish} from "./Dish";

export interface Menu {
    menuId: string;
    name: string;
    description: string;
    dishes: Dish[];
}