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
            <h1>{restaurant.name}</h1>
        </>
    )
}


export default RestaurantItemSmall;