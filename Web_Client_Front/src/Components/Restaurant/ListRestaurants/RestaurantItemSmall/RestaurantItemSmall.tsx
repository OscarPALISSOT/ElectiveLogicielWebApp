import style from "./RestaurantItemSmall.module.css";
import React from "react";
import {useNavigate} from "react-router";
import {Restaurant} from "../../../../Interfaces/Restaurant.ts";


interface RestaurantItemSmall {
    restaurant: Restaurant,
}

const RestaurantItemSmall: React.FC<RestaurantItemSmall> = ({restaurant}: RestaurantItemSmall) => {

    const navigate = useNavigate();

    return (
        <>
            <div key={restaurant.restaurantId} className={style.smallItem} onClick={() => navigate('/Restaurant/' + restaurant.restaurantId)}>
                <div className={style.thumbnail}>
                    <img crossOrigin={"anonymous"}
                         src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurantThumbnail?restaurantThumbnail=' + restaurant.thumbnail}
                         alt=""/>
                </div>
                <div className={style.middleContent}>
                    <div className={style.footerContentLeft}>
                        <p className={style.restaurantName}>{restaurant.name}</p>
                        <p>{restaurant.address} - {restaurant.city}</p>
                    </div>

                </div>
                <div className={style.rating}>
                    <p>{parseFloat((Math.random() * 4 + 1).toFixed(1))}</p>
                </div>
            </div>
        </>
    )
}


export default RestaurantItemSmall;