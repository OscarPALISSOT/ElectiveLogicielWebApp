import InputField from "../../Components/InputField/InputField.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import style from "./Home.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {FoodType} from "../../Interfaces/FoodType.ts";
import FeaturedFoodTypes from "../../Components/Homepage/FeaturedFoodTypes/FeaturedFoodTypes.tsx";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import {Restaurant} from "../../Interfaces/Restaurant.ts";
import FeaturedRestaurants from "../../Components/Homepage/FeaturedRestaurants/FeaturedRestaurants.tsx";
import MapComponent from "../../Components/MapComponent/MapComponent.tsx";
import logo from "../../Assets/img/logo.svg";

function Home() {

    const [foodTypes, setFoodTypes] = useState<FoodType[]>([]);
    const [featuredRestaurants, setFeaturedRestaurants] = useState<Restaurant[]>([]);
    const [lng, setLng] = useState<number>(0);
    const [lat, setLat] = useState<number>(0);
    const [ searchResult, setSearchResult ] = useState<Restaurant[]>([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getFeaturedFood')
            .then((response) => {
                setFoodTypes(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getFeaturedRestaurant')
            .then((response) => {
                setFeaturedRestaurants(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            })

        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLng(position.coords.longitude)
        })
    }, [])


    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/search', {
            params: {
                search: event.target.value
            }
        })
            .then((response) => {
                setSearchResult(response.data.response);
                console.log(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            })
    }



    return (
        <>
            <div className={style.header}>
                <div className="">
                    <p className={style.headerLabel}>Livrer maint.</p>
                    <p className={style.headerAddress}>10 rue de l'école</p>
                </div>
                <div className={style.logo}>
                    <img src={logo} alt=""/>
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
                    onChange={(event) => search(event)}
                />
            </div>

            <h2 className={style.title}>Catégories à la une :</h2>

            <FeaturedFoodTypes FoodTypes={foodTypes}/>

            <h2 className={style.title}>Restaurants à la une :</h2>

            <FeaturedRestaurants FeaturedRestaurants={featuredRestaurants}/>

            <div className={style.mapContainer}>
                <MapComponent lat={lat} lng={lng} zoom={12}/>
            </div>

            <NavBar/>
        </>
    )
}

export default Home
