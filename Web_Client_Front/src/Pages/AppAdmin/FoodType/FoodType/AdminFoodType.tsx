import AdminItem from "../../../../Components/Admin/AdminItem/AdminItem.tsx";
import {useState, useEffect} from 'react';
import {FoodType} from "../../../../Interfaces/FoodType.ts";
import axios from "axios";
import style from "./AdminFoodType.module.css";
import Btn from "../../../../Components/Btn/Btn.tsx";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function FoodTypeAdmin() {

    const navigate = useNavigate();

    const [foodTypes, setFoodTypes] = useState<FoodType[]>([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getALLfoodTypes')
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
                <h1>Catégories de restaurants</h1>
                <Btn
                    label={'Ajouter une catégorie'}
                    style={'primary'}
                    rounded={true}
                    icon={<FontAwesomeIcon icon={faPlus}/> }
                    onClick={() => navigate('/admin/foodtypes/add')}
                />
                {foodTypes.map((item) => (
                    <AdminItem
                        key={item.foodTypeId}
                        title={item.foodTypeLabel}
                        image={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getFoodTypeThumbnail?foodTypeIcons=' + item.icon}
                    />
                ))}
            </div>

        </>
    )
}

export default FoodTypeAdmin