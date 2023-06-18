import InputField from "../../Components/InputField/InputField.tsx";
import Btn from "../../Components/Btn/Btn.tsx";
import React from "react";


function Authentication() {

    const formHandler = (event: React.FormEvent) => {
        event.preventDefault()
        alert('submit')
    }

    return (
        <>
            <h1>Authentication</h1>
            <form onSubmit={formHandler}>
                <InputField name={'username'} label={'Your Username'} type={'text'} placeholder={'username@example.com'}/>
                <InputField name={'pwd'} label={'Your password'} type={'password'}/>
                <Btn label={'Se connecter'}/>
            </form>

            <Btn label={'Créer un compte'} link={'/createAccount'}/>
        </>
    )
}

export default Authentication
