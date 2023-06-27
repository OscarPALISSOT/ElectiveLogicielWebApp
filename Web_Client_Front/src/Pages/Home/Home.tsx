import InputField from "../../Components/InputField/InputField.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import style from "./Home.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {FoodType} from "../../Interfaces/FoodType.ts";
import FoodTypesCarrousel from "../../Components/Homepage/FoodTypesCarrousel/FoodTypesCarrousel.tsx";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import {Restaurant} from "../../Interfaces/Restaurant.ts";
import FeaturedRestaurants from "../../Components/Homepage/FeaturedRestaurants/FeaturedRestaurants.tsx";
import MapComponent from "../../Components/MapComponent/MapComponent.tsx";

function Home() {


    const [foodTypes, setFoodTypes] = useState<FoodType[]>([]);
    const [featuredRestaurants, setFeaturedRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getALLfoodTypes')
            .then((response) => {
                setFoodTypes(response.data.response.slice(0, 3));
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getAllrestaurants')
            .then((response) => {
                setFeaturedRestaurants(response.data.response.slice(0, 3));
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])



    return (
        <>
            <div className={style.header}>
                <div className="">
                    <p className={style.headerLabel}>Livrer maint.</p>
                    <p className={style.headerAddress}>10 rue de l'école</p>
                </div>
                <div className={style.logo}>
                    <img src="./src/Assets/img/logo.svg" alt=""/>
                </div>
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

            <FoodTypesCarrousel FoodTypes={foodTypes}/>

            <FeaturedRestaurants FeaturedRestaurants={featuredRestaurants}/>

            <div className={style.mapContainer}>
                <MapComponent/>
            </div>

            <NavBar/>
        </>
    )
}

export default Home
