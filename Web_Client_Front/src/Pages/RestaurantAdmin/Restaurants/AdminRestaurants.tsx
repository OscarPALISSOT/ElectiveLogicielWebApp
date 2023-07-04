import {useState, useEffect} from 'react';
import axios from "axios";
import style from "./AdminRestaurants.module.css";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Restaurant} from "../../../Interfaces/Restaurant.ts";
import Btn from "../../../Components/Btn/Btn.tsx";
import AdminItem from "../../../Components/Admin/AdminItem/AdminItem.tsx";
import setAuthTokenHeader from "../../../Modules/SetToken.ts";

function FoodTypeAdmin() {

    const navigate = useNavigate();

    const [foodTypes, setFoodTypes] = useState<Restaurant[]>([])

    useEffect(() => {
        setAuthTokenHeader(localStorage.getItem('JWT_auth_Cesivroo'));
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getAllRestaurants')
            .then((response) => {
                setFoodTypes(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <div className={style.container}>
                <h1>Gestion des restaurants</h1>
                <Btn
                    label={'Ajouter un Restaurant'}
                    style={'primary'}
                    rounded={true}
                    icon={<FontAwesomeIcon icon={faPlus}/> }
                    onClick={() => navigate('/admin/restaurants/add')}
                />
                {foodTypes.map((item) => (
                    <AdminItem
                        key={item.restaurantId}
                        title={item.name}
                        image={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/getRestaurantThumbnail?restaurantThumbnail=' + item.thumbnail}
                    />
                ))}
            </div>

        </>
    )
}

export default FoodTypeAdmin