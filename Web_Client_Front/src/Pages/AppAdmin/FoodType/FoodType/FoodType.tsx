import AdminItem from "../../../../Components/Admin/AdminItem/AdminItem.tsx";
import {useState, useEffect} from 'react';
import {FoodType} from "../../../../Interfaces/FoodType.ts";
import axios from "axios";
import NavBar from "../../../../Components/NavBar/NavBar.tsx";

function GetAllFoodType() {
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

    return(
        <>
            <h1>Type de restaurants</h1>
            <div>
                {foodTypes.map((item) => (
                    <div key={item.foodTypeId}>
                        <AdminItem label={item.foodTypeLabel}/>
                    </div>
                ))}
            </div>
            <NavBar/>
        </>
    )
}

export default GetAllFoodType