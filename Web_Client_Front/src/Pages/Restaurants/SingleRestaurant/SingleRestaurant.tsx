import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";
import {Menu} from "../../../Interfaces/Menu.ts";
import axios from "axios";
import setAuthTokenHeader from "../../../Modules/SetToken.ts";
import style from "./SingleRestaurant.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faStar} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router";
import Menus from "../../../Components/Restaurant/Menus/Menus.tsx";
import NavBar from "../../../Components/NavBar/NavBar.tsx";


function SingleRestaurant() {

    const navigate = useNavigate();


    const {id} = useParams();

    const [restaurant, setRestaurant] = useState<Restaurant>({} as Restaurant);
    const [menus, setMenus] = useState<Menu[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);

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
            setMenus(response.data.response);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };



    return (
        <>
            <div className={`${style.header} ${isScrolled && style.headerScrolled}`}>
                <div className={style.close} onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft} size={'2xl'}/>
                </div>
                <h2 className={style.headerTitle}>{restaurant.name}</h2>
            </div>
            <div className={style.bannerContainer}>
                <img crossOrigin={"anonymous"} src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurantThumbnail?restaurantThumbnail=' + restaurant.thumbnail} alt={restaurant.name}/>
            </div>
            <div className={style.container}>
                <h2 className={style.title}>{restaurant.name}<span className={style.address}> - {restaurant.address}, {restaurant.city}</span></h2>
                <p className={style.restoInfo}>{parseFloat((Math.random() * 4 + 1).toFixed(1))} <FontAwesomeIcon icon={faStar}/> {restaurant.openingHours}</p>
                <h2 className={style.titleMenu}> Les menus :</h2>
                <Menus Menus={menus}/>
            </div>

            <NavBar/>
        </>
    )
}

export default SingleRestaurant
