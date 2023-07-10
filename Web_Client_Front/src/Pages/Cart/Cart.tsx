import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Restaurant} from "../../Interfaces/Restaurant.ts";
import axios from "axios";
import setAuthTokenHeader from "../../Modules/SetToken.ts";
import style from "./Cart.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router";
import {faCircleChevronLeft} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import ListRestaurants from "../../Components/Restaurant/ListRestaurants/ListRestaurants.tsx";


function Cart() {

    const navigate = useNavigate();

    //const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <FontAwesomeIcon icon={faCircleChevronLeft} size={'2x'} onClick={() => navigate(-1)}/>
                    <h3 className={style.headerTitle}>Panier</h3>
                </div>
            </div>
            <NavBar/>

        </>
    )
}

export default Cart
