import InputField from "../../Components/InputField/InputField.tsx";
import Btn from "../../Components/Btn/Btn.tsx";
import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faEnvelope, faLock, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import styles from './CreateAccount.module.css'


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

            <div className={styles.header}>
                <Btn label={'Retour'} style={'dark'} icon={<FontAwesomeIcon icon={faCircleChevronLeft} />} onClick={() => navigate("/login")} rounded/>
                <div className={styles.headerLogo}>
                    <img src="./src/Assets/img/logo.svg" alt=""/>
                </div>
            </div>

            <h1 className={styles.title}>Inscription</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <InputField name={'firstName'} type={'text'} placeholder={'Prénom'} required={true}
                                value={inputs.firstName} onChange={handleChange} style={'primary'} icon={<FontAwesomeIcon icon={faUser} />}/>
                    <InputField name={'lastName'} type={'text'} placeholder={'Nom'} required={true}
                                value={inputs.lastName} onChange={handleChange} style={'primary'} icon={<FontAwesomeIcon icon={faUser} />}/>
                    <InputField name={'email'} type={'text'} placeholder={'Email'}
                                required={true} value={inputs.email} onChange={handleChange} style={'primary'} icon={<FontAwesomeIcon icon={faEnvelope} />}/>
                    {emailExist && <p>Cet email est déjà utilisé</p>}
                    <InputField name={'pwd'} type={'password'} required={true} value={inputs.pwd} placeholder={'Mot de passe'}
                                onChange={handleChange} style={'primary'} icon={<FontAwesomeIcon icon={faLock} />}/>
                    <InputField name={'pwdConfirm'} type={'password'} required={true}
                                value={inputs.pwdConfirm} onChange={handleChange} style={'primary'} icon={<FontAwesomeIcon icon={faLock} />} placeholder={'Confirmez le mot de passe'}/>
                    {samePwd && <p>Les mots de passe ne sont pas identiques</p>}
                </div>
                <Btn label={'Créer mon compte'} disabled={disabled} style={'dark'} icon={<FontAwesomeIcon icon={faUserPlus} />}/>
            </form>
        </>
    )
}

export default CreateAccount
