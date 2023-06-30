import style from "./Categories.module.css";
import React from "react";
import {FoodType} from "../../../Interfaces/FoodType.ts";


interface CategoriesProps {
    FoodTypes: FoodType[];
}

const Categories: React.FC<CategoriesProps> = ({FoodTypes}: CategoriesProps) => {

    return (
        <>
            <div className={style.containerCategories}>
                {FoodTypes.map((foodType) => (
                    <div key={foodType.foodTypeId} className={style.categoriesItem}>
                        <div className={style.thumbnail}>
                            <img crossOrigin={"anonymous"} src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getFoodTypeThumbnail?foodTypeIcons=' + foodType.icon} alt=""/>
                        </div>

                        <div className={style.title}>
                            <p>{foodType.foodTypeLabel}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


export default Categories;