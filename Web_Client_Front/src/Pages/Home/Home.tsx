import InputField from "../../Components/InputField/InputField.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import style from "./Home.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {FoodType} from "../../Interfaces/FoodType.ts";

function Home() {

    const [foodTypes, setFoodTypes] = useState<FoodType[]>([]);

    useEffect(() => {
        //axios.get(import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getALLfoodTypes')
        axios.get('http://192.168.1.177:3002/api/v1/foodTypes/getALLfoodTypes')
            .then((response) => {
                setFoodTypes(response.data.response);
                console.log(response.data.response)
            })
    }, [])


    return (
        <>
            <div className={style.header}>
                <h1>Home</h1>
            </div>
            <div className={style.searchContainer}>
                <InputField
                    name={'search'}
                    radius={'rounded'}
                    style={'primary'}
                    type={'text'}
                    placeholder={'Plats, restaurant, ...'}
                    icon={<FontAwesomeIcon icon={faSearch}/>}
                />
            </div>

            <div className={style.foodTypeContainer}>
                {foodTypes.map((foodType) => (
                    <div key={foodType.foodTypeId}>
                        <p>{foodType.foodTypeLabel}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
