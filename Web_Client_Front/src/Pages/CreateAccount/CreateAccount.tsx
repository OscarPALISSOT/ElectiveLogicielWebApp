import InputField from "../../Components/InputField/InputField.tsx";
import Btn from "../../Components/Btn/Btn.tsx";
import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router";


function CreateAccount() {

    const navigate = useNavigate();

    const [disabled, setDisabled] = React.useState(true)
    const [samePwd, setSamePwd] = React.useState(false)
    const [emailExist, setEmailExist] = React.useState(false)

    const [inputs, setInputs] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        pwd: '',
        pwdConfirm: ''
    })

    useEffect(() => {
        if (inputs.pwd !== inputs.pwdConfirm && inputs.pwdConfirm !== '') {
            setSamePwd(true)
        } else {
            setSamePwd(false)
        }
    }, [inputs.pwdConfirm])

    useEffect(() => {
        axios.get(import.meta.env.VITE_URL_MS_USER + '/getUser', {params: {email: inputs.email}})
            .then(function (response) {
                if (response.data.response !== null) {
                    setEmailExist(true)
                } else {
                    setEmailExist(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [inputs.email])

    useEffect(() => {
        if (!emailExist && !samePwd) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [emailExist, samePwd])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        setDisabled(true);
        axios.post(import.meta.env.VITE_URL_MS_USER + '/create',
            null,{
                params: {
                    firstName: inputs.firstName,
                    lastName: inputs.lastName,
                    email: inputs.email,
                    password: inputs.pwd,
                    roles: 'user',
                }
            })
            .then(function () {
                navigate("/login")
            })
            .catch(function (error) {
                console.log(error);
                setDisabled(false);
            })
    }

    return (
        <>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <InputField name={'firstName'} label={'Prénom'} type={'text'} placeholder={'John'} required={true}
                            value={inputs.firstName} onChange={handleChange} style={'primary'}/>
                <InputField name={'lastName'} label={'Nom'} type={'text'} placeholder={'Smith'} required={true}
                            value={inputs.lastName} onChange={handleChange} style={'primary'}/>
                <InputField name={'email'} label={'Email'} type={'text'} placeholder={'JohnSmith@example.com'}
                            required={true} value={inputs.email} onChange={handleChange} style={'primary'}/>
                {emailExist && <p>Cet email est déjà utilisé</p>}
                <InputField name={'pwd'} label={'Mot de passe'} type={'password'} required={true} value={inputs.pwd}
                            onChange={handleChange} style={'primary'}/>
                <InputField name={'pwdConfirm'} label={'Confirmez le mot de passe'} type={'password'} required={true}
                            value={inputs.pwdConfirm} onChange={handleChange} style={'primary'}/>
                {samePwd && <p>Les mots de passe ne sont pas identiques</p>}
                <Btn label={'Créer le compte'} disabled={disabled} style={'yellow'} rounded/>
            </form>
        </>
    )
}

export default CreateAccount
