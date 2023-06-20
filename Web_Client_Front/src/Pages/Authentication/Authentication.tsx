import InputField from "../../Components/InputField/InputField.tsx";
import Btn from "../../Components/Btn/Btn.tsx";
import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import styles from './Authentication.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faRightToBracket, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";


function Authentication() {

    const navigate = useNavigate();

    const [incorrectEmail, setIncorrectEmail] = React.useState(false)
    const [incorrectPwd, setIncorrectPwd] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)

    const [inputs, setInputs] = React.useState({
        email: '',
        pwd: '',
    })

    useEffect(() => {
        setIncorrectEmail(false)
    }, [inputs.email])

    useEffect(() => {
        setIncorrectPwd(false)
    }, [inputs.pwd])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setDisabled(true)
        try {
            const user = (await axios.get(import.meta.env.VITE_URL_MS_USER + '/getUser', {params: {email: inputs.email}})).data.response
            if (!user) {
                setIncorrectEmail(true)
            } else {
                await axios.post(import.meta.env.VITE_URL_MS_USER + '/checkUserPassword', null, {
                    params: {
                        email: inputs.email,
                        password: inputs.pwd
                    }
                })
                const token = (await axios.post(import.meta.env.VITE_URL_MS_AUTH + '/create', null, {
                    params: {
                        userId: user.UserId,
                        email: user.Email,
                        firstName: user.FirstName,
                        lastName: user.LastName,
                        roles: user.Role.map((role: { 'Role': string }) => role.Role).join(', ')
                    }
                })).data.token
                await axios.post(import.meta.env.VITE_URL_MS_USER + '/addTokenToUser', null, {
                    params: {
                        email: inputs.email,
                        token: token
                    }
                })
                localStorage.removeItem('JWT_auth_Cesivroo');
                localStorage.setItem('JWT_auth_Cesivroo', token)
            }
        } catch (error) {
            setDisabled(false)
            console.log(error);
            if ((error as any).response.status === 401) {
                setIncorrectPwd(true)
            }

        }
        navigate('/')
    }

    return (
        <>
            <div className={styles.logoContainer}>
                <img src="./src/Assets/img/logo.svg" alt=""/>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <InputField
                    name={'email'}
                    type={'text'}
                    placeholder={'Email'}
                    onChange={handleChange}
                    value={inputs.email}
                    style={'secondary'}
                    required={true}
                    radius={'smooth'}
                    icon={<FontAwesomeIcon icon={faUser}/>}
                />
                {incorrectEmail && <p>Indentifiant inconnu</p>}
                <InputField
                    name={'pwd'}
                    type={'password'}
                    onChange={handleChange}
                    value={inputs.pwd}
                    style={'secondary'}
                    required={true}
                    radius={'smooth'}
                    placeholder={'Mot de passe'}
                    icon={<FontAwesomeIcon icon={faLock} />}
                />
                {incorrectPwd && <p>Mot de passe incorrect</p>}
                <Btn label={'Se connecter'} disabled={disabled} style={'dark'} icon={<FontAwesomeIcon icon={faRightToBracket} />}/>
            </form>

            <div className={styles.separator}>
                <div className={styles.lineSeparator}></div>
                <p className={styles.textSeparator}>Ou</p>
                <div className={styles.lineSeparator}></div>
            </div>

            <div className={styles.registerBtnContainer}>
                <Btn
                    label={'Créer un compte'}
                    style={'yellow'}
                    onClick={() => navigate("/register")}
                    icon={<FontAwesomeIcon icon={faUserPlus} />}
                />
            </div>

        </>
    )
}

export default Authentication
