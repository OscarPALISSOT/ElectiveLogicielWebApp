import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";
import {Menu} from "../../../Interfaces/Menu.ts";
import axios from "axios";
import setAuthTokenHeader from "../../../Modules/SetToken.ts";
import style from "./SingleRestaurant.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router";
import FeaturedRestaurants from "../../../Components/Homepage/FeaturedRestaurants/FeaturedRestaurants.tsx";
import Menus from "../../../Components/Restaurant/Menus/Menus.tsx";


function SingleRestaurant() {

    const navigate = useNavigate();


    const {id} = useParams();

    const [restaurant, setRestaurant] = useState<Restaurant>({} as Restaurant);
    const [menu, setMenu] = useState<Menu[]>([]);

    useEffect(() => {
        setAuthTokenHeader(localStorage.getItem('JWT_auth_Cesivroo'));
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurant', {
            params: {
                restaurantId: id
            }
        }).then((response) => {
            console.log(response.data.response);
            setRestaurant(response.data.response);
        }).catch((error) => {
            console.log(error);
        })

        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_MENU + '/getAllMenus', {
            params: {
                restaurantId: id
            }
        }).then((response) => {
            console.log(response.data.response);
            setMenu(response.data.response);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <div className={style.header}>
                <div className={style.close} onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faXmark} size={'2xl'}/>
                </div>
            </div>
            <div className={style.bannerContainer}>
                <img crossOrigin={"anonymous"} src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurantThumbnail?restaurantThumbnail=' + restaurant.thumbnail} alt={restaurant.name}/>
            </div>
            <div className={style.container}>
                <h2 className={style.title}>{restaurant.name} - {restaurant.address}, {restaurant.city}</h2>
                <p className={style.restoInfo}>{parseFloat((Math.random() * 4 + 1).toFixed(1))} <FontAwesomeIcon icon={faStar}/></p>
            </div>

            <h3 className={style.titleMenu}> Les menus :</h3>

            <Menus Menus={menu}/>
        </>
    )
}

export default SingleRestaurant
