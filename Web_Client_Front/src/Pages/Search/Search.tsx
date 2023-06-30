import {useEffect, useState} from "react";
import {FoodType} from "../../Interfaces/FoodType.ts";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import InputField from "../../Components/InputField/InputField.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {Restaurant} from "../../Interfaces/Restaurant.ts";
import style from "./Search.module.css";
import Categories from "../../Components/Search/Categories/Categories.tsx";
import setAuthTokenHeader from "../../Modules/SetToken.ts";

function Search() {

    const [foodTypes, setFoodTypes] = useState<FoodType[]>([]);

    const [ searchResult, setSearchResult ] = useState<Restaurant[]>([]);

    useEffect(() => {
        setAuthTokenHeader(localStorage.getItem('JWT_auth_Cesivroo'));
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getALLfoodTypes')
            .then((response) => {
                setFoodTypes(response.data.response);
            })
            .catch((error) => {
                console.log(error);
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
            <h2 className={style.title}>Toutes les catégories</h2>

            <Categories FoodTypes={foodTypes}/>

            <NavBar/>
        </>
    )
}

export default Search
