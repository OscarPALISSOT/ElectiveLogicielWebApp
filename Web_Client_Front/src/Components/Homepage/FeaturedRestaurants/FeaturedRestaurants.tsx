import style from "./FeaturedRestaurants.module.css";
import React from "react";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";


interface FeaturedRestaurantsProps {
    FeaturedRestaurants: Restaurant[];
}

const FeaturedRestaurants: React.FC<FeaturedRestaurantsProps> = ({FeaturedRestaurants}: FeaturedRestaurantsProps) => {

    return (
        <>
            <div className={style.featuredRestaurantsContainer}>
                {FeaturedRestaurants.map((restaurant) => (
                    <div key={restaurant.restaurantId} className={style.featuredRestaurantItem}>
                        <p>{restaurant.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}


export default FeaturedRestaurants;