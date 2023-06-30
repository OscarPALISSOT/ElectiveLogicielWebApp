import InputField from "../../../../Components/InputField/InputField.tsx";
import InputFile from "../../../../Components/InputFile/InputFile.tsx";
import Btn from "../../../../Components/Btn/Btn.tsx";
import React, {useState} from "react";
import style from "./CreateFoodType.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faUtensils} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {useNavigate} from "react-router";
import setAuthTokenHeader from "../../../../Modules/SetToken.ts";


function CreateFoodType() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        foodTypeLabel: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const foodTypeThumbnail: File = (event.target as any).foodTypeThumbnail.files[0];
        const formData = new FormData();
        formData.append('foodTypeThumbnail', foodTypeThumbnail);
        setAuthTokenHeader(localStorage.getItem('JWT_auth_Cesivroo'));
        axios.post( import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_RESTAURANT_FOODTYPE + '/create',
            formData,{
                params: {
                    foodType: inputs.foodTypeLabel
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function () {
                navigate("/admin/foodTypes")
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit}>
                <h1>Ajouter une catégorie de restaurant.</h1>
                <InputField
                    type={'text'}
                    value={inputs.foodTypeLabel}
                    placeholder={'Catégorie'}
                    name={'foodTypeLabel'}
                    required={true}
                    style={'primary'}
                    radius={'smooth'}
                    icon={<FontAwesomeIcon icon={faUtensils} />}
                    onChange={handleChange}
                />

                <h2>Icon</h2>
                <InputFile id={'foodTypeThumbnail'}/>
                <Btn
                    label={'Ajouter la catégorie'}
                    style={'primary'}
                    icon={<FontAwesomeIcon icon={faPlus} />}
                />
            </form>
        </>
    )
}

export default CreateFoodType
