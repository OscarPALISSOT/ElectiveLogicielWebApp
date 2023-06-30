import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";
import axios from "axios";
import setAuthTokenHeader from "../../../Modules/SetToken.ts";
import style from "./SingleRestaurant.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";


function SingleRestaurant() {


    const {id} = useParams();

    const [restaurant, setRestaurant] = useState<Restaurant>({} as Restaurant);

    useEffect(() => {
        setAuthTokenHeader(localStorage.getItem('JWT_auth_Cesivroo'));
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurant', {
            params: {
                restaurantId: id
            }
        }).then((response) => {
            setRestaurant(response.data.response);
        }).catch((error) => {
            console.log(error);
        })
    }, [id])

    return (
        <>
            <div className={style.header}>
                <div className="">
                    <FontAwesomeIcon icon={faXmark} size={'2xl'}/>
                </div>
            </div>
            <div className={style.bannerContainer}>
                <img crossOrigin={"anonymous"} src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurantThumbnail?restaurantThumbnail=' + restaurant.thumbnail} alt={restaurant.name}/>
            </div>
            <div className={style.container}>
                <h2 className={style.title}>{restaurant.name} - {restaurant.address}, {restaurant.city}</h2>
            </div>
        </>
    )
}

export default SingleRestaurant
