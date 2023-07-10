import style from "./ListRestaurants.module.css";
import React from "react";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";
import RestaurantItemSmall from "./RestaurantItemSmall/RestaurantItemSmall.tsx";
import RestaurantItemLarge from "./RestaurantItemLarge/RestaurantItemLarge.tsx";


interface ListRestaurantsProps {
    restaurants: Restaurant[],
    sizeItem: 'small' | 'large',
}

const ListRestaurants: React.FC<ListRestaurantsProps> = ({restaurants, sizeItem}: ListRestaurantsProps) => {

    return (
        <>
            <div className={style.ListRestaurantsContainer}>
                {sizeItem === 'large' ?
                    restaurants.map((restaurant) => (
                        <RestaurantItemLarge key={restaurant.restaurantId} restaurant={restaurant}/>
                    ))
                    :
                    restaurants.map((restaurant) => (
                        <RestaurantItemSmall key={restaurant.restaurantId} restaurant={restaurant}/>
                    ))
                }
            </div>
        </>
    )
}


export default ListRestaurants;