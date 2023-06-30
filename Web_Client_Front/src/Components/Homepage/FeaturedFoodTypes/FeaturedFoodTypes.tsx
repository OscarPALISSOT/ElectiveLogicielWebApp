import style from "./FeaturedFoodTypes.module.css";
import React from "react";
import {FoodType} from "../../../Interfaces/FoodType.ts";


interface FeaturedFoodTypesProps {
    FoodTypes: FoodType[];
}

const FeaturedFoodTypes: React.FC<FeaturedFoodTypesProps> = ({FoodTypes}: FeaturedFoodTypesProps) => {

    return (
        <>
            <div className={style.carrouselContainer}>
                {FoodTypes.map((foodType) => (
                    <div key={foodType.foodTypeId} className={style.carrouselItem}>
                        <div className={style.thumbnail}>
                            <img crossOrigin={"anonymous"} src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getFoodTypeThumbnail?foodTypeIcons=' + foodType.icon} alt=""/>
                        </div>
                        <p>{foodType.foodTypeLabel}</p>
                    </div>
                ))}
            </div>

        </>
    )
}


export default FeaturedFoodTypes;