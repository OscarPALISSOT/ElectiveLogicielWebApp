import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";
import axios from "axios";
import setAuthTokenHeader from "../../../Modules/SetToken.ts";
import style from "./ArchiveRestoByCat.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router";
import {faCircleChevronLeft} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../../Components/NavBar/NavBar.tsx";
import ListRestaurants from "../../../Components/Restaurant/ListRestaurants/ListRestaurants.tsx";


function ArchiveRestoByCat() {

    const navigate = useNavigate();


    const {label} = useParams();

    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        setAuthTokenHeader(localStorage.getItem('JWT_auth_Cesivroo'));
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getAllRestaurantFromCat', {
            params: {
                foodTypeLabel: label
            }
        }).then((response) => {
            setRestaurants(response.data.response);
        }).catch((error) => {
            console.log(error);
        })

    }, [])

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <FontAwesomeIcon icon={faCircleChevronLeft} size={'2x'} onClick={() => navigate(-1)}/>
                    <h3 className={style.headerTitle}>{label}</h3>
                </div>
                <h3 className={style.resultTitle}>{restaurants.length > 1 ? restaurants.length + ' résultats' : restaurants.length + ' résultat'}</h3>
                <ListRestaurants restaurants={restaurants} sizeItem={'small'}/>
            </div>
            <NavBar/>

        </>
    )
}

export default ArchiveRestoByCat
