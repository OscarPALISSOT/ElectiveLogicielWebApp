import {FoodType} from "./FoodType";

export interface Restaurant {
    restaurantId: string;
    name: string;
    owner: string;
    staff: string[];
    address: string;
    city: string;
    postalCode: string;
    country: string;
    foodType: FoodType;
    evaluationId: string[];
    openingHours: string;
    menuId: string[];
}