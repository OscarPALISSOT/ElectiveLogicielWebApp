import InputField from "../../Components/InputField/InputField.tsx";
import Btn from "../../Components/Btn/Btn.tsx";


function Authentication() {

    return (
        <>
            <h1>Authentication</h1>
            <InputField name={'username'} label={'Your Username'} type={'text'} placeholder={'username@example.com'}/>
            <InputField name={'pwd'} label={'Your password'} type={'password'}/>
            <Btn label={'Se connecter'}/>
            <Btn label={'Créer un compte'} link={'/about'}/>
        </>
    )
}

export default Authentication
