import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";
import axios from "axios";
import setAuthTokenHeader from "../../../Modules/SetToken.ts";
import style from "./SingleSearch.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router";
//import FeaturedSearchs from "../../../Components/Homepage/FeaturedSearchs/FeaturedSearchs.tsx";
import FeaturedRestaurants from "../../../Components/Homepage/FeaturedRestaurants/FeaturedRestaurants.tsx";


function SingleSearch() {

    const navigate = useNavigate();


    const {label} = useParams();

    const [featuredRestaurants, setFeaturedRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        setAuthTokenHeader(localStorage.getItem('JWT_auth_Cesivroo'));
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getAllRestaurantFromCat', {
            params: {
                foodTypeLabel: label
            }
        }).then((response) => {
            console.log(response.data.response);
            setFeaturedRestaurants(response.data.response);
        }).catch((error) => {
            console.log(error);
        })

    }, [])

    return (
        <>
            <div className={style.header}>
                <div className={style.close} onClick={() => navigate('/search')}>
                    <FontAwesomeIcon icon={faXmark} size={'2xl'}/>
                </div>
            </div>

            <FeaturedRestaurants FeaturedRestaurants={featuredRestaurants}/>

        </>
    )
}

export default SingleSearch
