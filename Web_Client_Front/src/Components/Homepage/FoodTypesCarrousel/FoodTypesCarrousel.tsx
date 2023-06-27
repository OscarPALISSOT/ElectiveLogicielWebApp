import style from "./FoodTypesCarrousel.module.css";
import React from "react";
import {FoodType} from "../../../Interfaces/FoodType.ts";


interface FoodTypesCarrouselProps {
    FoodTypes: FoodType[];
}

const FoodTypesCarrousel: React.FC<FoodTypesCarrouselProps> = ({FoodTypes}: FoodTypesCarrouselProps) => {

    return (
        <>
            <div className={style.carrouselContainer}>
                {FoodTypes.map((foodType) => (
                    <div key={foodType.foodTypeId} className={style.carrouselItem}>
                        <p>{foodType.foodTypeLabel}</p>
                    </div>
                ))}
            </div>

        </>
    )
}


export default FoodTypesCarrousel;