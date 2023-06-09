import style from "./RestaurantItemLarge.module.css";
import React from "react";
import {useNavigate} from "react-router";
import {Restaurant} from "../../../../Interfaces/Restaurant.ts";


interface RestaurantItemLarge {
    restaurant: Restaurant,
}

const RestaurantItemLarge: React.FC<RestaurantItemLarge> = ({restaurant}: RestaurantItemLarge) => {

    const navigate = useNavigate();

    return (
        <>
            <div key={restaurant.restaurantId} onClick={() => navigate('Restaurant/' + restaurant.restaurantId)}>
                <div className={style.thumbnail}>
                    <img crossOrigin={"anonymous"}
                         src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurantThumbnail?restaurantThumbnail=' + restaurant.thumbnail}
                         alt=""/>
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
        </>
    )
}


export default RestaurantItemLarge;