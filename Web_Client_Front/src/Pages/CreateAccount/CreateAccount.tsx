import InputField from "../../Components/InputField/InputField.tsx";
import Btn from "../../Components/Btn/Btn.tsx";
import React from "react";


function CreateAccount() {

    const formHandler = (event: React.FormEvent) => {
        event.preventDefault()
        alert('inscription')
    }

    return (
        <>
            <h1>Inscription</h1>
            <form onSubmit={formHandler}>
                <InputField name={'username'} label={'Your Username'} type={'text'} placeholder={'username@example.com'}/>
                <InputField name={'pwd'} label={'Your password'} type={'password'}/>
                <InputField name={'pwd'} label={'Confirmez le mdp'} type={'password'}/>
                <Btn label={'Créer le compte'}/>
            </form>
        </>
    )
}

export default CreateAccount
