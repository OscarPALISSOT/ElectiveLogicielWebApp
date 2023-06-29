import React, {useEffect, useState} from "react";
import style from "./CreateRestaurant.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBowlFood,
    faCity,
    faClock,
    faEarthEurope,
    faHome,
    faPlus,
    faUtensils
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {useNavigate} from "react-router";
import InputField from "../../../Components/InputField/InputField.tsx";
import Btn from "../../../Components/Btn/Btn.tsx";
import InputFile from "../../../Components/InputFile/InputFile.tsx";
import Select from "../../../Components/Select/Select.tsx";
import {FoodType} from "../../../Interfaces/FoodType.ts";


function CreateFoodType() {

    const navigate = useNavigate();

    const [foodTypes, setFoodTypes] = useState<FoodType[]>([]);
    const [foodTypesLabel, setFoodTypesLabel] = useState<string[]>([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/getALLfoodTypes')
            .then((response) => {
                setFoodTypes(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        setFoodTypesLabel(foodTypes.map((foodType) => foodType.foodTypeLabel))
    }, [foodTypes])

    const [inputs, setInputs] = useState({
        name: '',
        owner: 'oscar@test',
        staff: Array('oscar@test', 'paul@test'),
        address: '',
        city: '',
        postalCode: '',
        country: '',
        foodType: '',
        openingHours: '',

    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const restaurantThumbnail: File = (event.target as any).restaurantThumbnail.files[0];
        const formData = new FormData();
        formData.append('restaurantThumbnail', restaurantThumbnail);
        axios.post(import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT + '/create',
            formData, {
                params: {
                    name: inputs.name,
                    owner: inputs.owner,
                    staff: '',
                    address: inputs.address,
                    city: inputs.city,
                    postalCode: inputs.postalCode,
                    country: inputs.country,
                    foodType: inputs.foodType,
                    openingHours: inputs.openingHours,
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function () {
                navigate("/admin/restaurants");
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit}>
                <h1>Créer un restaurant</h1>

                <InputField
                    type={'text'}
                    value={inputs.name}
                    placeholder={'Nom du restaurant'}
                    name={'name'}
                    required={true}
                    style={'primary'}
                    radius={'smooth'}
                    icon={<FontAwesomeIcon icon={faUtensils}/>}
                    onChange={handleChange}
                />
                <InputField
                    type={'text'}
                    value={inputs.address}
                    placeholder={'Adresse'}
                    name={'address'}
                    required={true}
                    style={'primary'}
                    radius={'smooth'}
                    icon={<FontAwesomeIcon icon={faHome}/>}
                    onChange={handleChange}
                />
                <InputField
                    type={'text'}
                    value={inputs.city}
                    placeholder={'Ville'}
                    name={'city'}
                    required={true}
                    style={'primary'}
                    radius={'smooth'}
                    icon={<FontAwesomeIcon icon={faCity}/>}
                    onChange={handleChange}
                />
                <InputField
                    type={'text'}
                    value={inputs.country}
                    placeholder={'Pays'}
                    name={'country'}
                    required={true}
                    style={'primary'}
                    radius={'smooth'}
                    icon={<FontAwesomeIcon icon={faEarthEurope}/>}
                    onChange={handleChange}
                />
                <InputField
                    type={'text'}
                    value={inputs.openingHours}
                    placeholder={'Horaires d\'ouverture'}
                    name={'openingHours'}
                    required={true}
                    style={'primary'}
                    radius={'smooth'}
                    icon={<FontAwesomeIcon icon={faClock}/>}
                    onChange={handleChange}
                />

                <Select
                    required={true}
                    name={'foodType'}
                    style={'primary'}
                    radius={'smooth'}
                    placeholder={'Type de cuisine'}
                    icon={<FontAwesomeIcon icon={faBowlFood}/>}
                    options={foodTypesLabel}
                    onChange={handleChange}
                />


                <h2>Bannière de présentation</h2>
                <InputFile id={'restaurantThumbnail'}/>
                <Btn
                    label={'Créer le restaurant'}
                    style={'yellow'}
                    icon={<FontAwesomeIcon icon={faPlus}/>}
                />
            </form>
        </>
    )
}

export default CreateFoodType
