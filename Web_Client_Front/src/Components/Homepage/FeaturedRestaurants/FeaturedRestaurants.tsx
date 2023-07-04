import style from "./FeaturedRestaurants.module.css";
import React from "react";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";
import {useNavigate} from "react-router";


interface FeaturedRestaurantsProps {
    FeaturedRestaurants: Restaurant[];
}

const FeaturedRestaurants: React.FC<FeaturedRestaurantsProps> = ({FeaturedRestaurants}: FeaturedRestaurantsProps) => {

    const navigate = useNavigate();

    return (
        <>
            <div className={style.featuredRestaurantsContainer}>
                {FeaturedRestaurants.map((restaurant) => (
                    <div key={restaurant.restaurantId} className={style.featuredRestaurantItem} onClick={() => navigate('Restaurant/' + restaurant.restaurantId)}>
                        <div className={style.thumbnail}>
                            <img crossOrigin={"anonymous"} src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurantThumbnail?restaurantThumbnail=' + restaurant.thumbnail} alt=""/>
                        </div>
                        <div className={style.footerContent}>
                            <div className={style.footerContentLeft}>
                                <p className={style.restaurantName}>{restaurant.name}</p>
                                <p>{restaurant.address} - {restaurant.city}</p>
                            </div>
                            <div className={style.footerContentRight}>
                                <div className={style.rating}>
                                    <p>{parseFloat((Math.random() * 4 + 1).toFixed(1))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


export default FeaturedRestaurants;