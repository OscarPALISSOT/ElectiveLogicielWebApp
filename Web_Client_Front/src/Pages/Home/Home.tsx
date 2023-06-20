import {Link} from "react-router-dom";
import Btn from "../../Components/Btn/Btn.tsx";
import InputField from "../../Components/InputField/InputField.tsx";

function Home() {

    return (
        <>
            <h1>Home</h1>
            <Link to="/about">About Us</Link>
            <br/>
            <Link to="/login">Se connecter</Link>
            <br/>
            <Btn label={'le texte'} style={'primary'}/>
            <br/>
            <Btn label={'le texte'} style={'secondary'}/>
            <br/>
            <Btn label={'le texte'} style={'yellow'}/>
            <br/>
            <Btn label={'le texte'} style={'primary'} rounded={true}/>
            <br/>
            <Btn label={'le texte'} style={'secondary'} rounded={true}/>
            <br/>
            <Btn label={'le texte'} style={'yellow'} rounded={true}/>
            <br/>
            <Btn label={'le texte'} style={'primary'} disabled={true}/>
            <br/>
            <Btn label={'le texte'} style={'secondary'} disabled={true}/>
            <br/>
            <Btn label={'le texte'} style={'yellow'} disabled={true}/>
            <br/>
            <Btn label={'le texte'} style={'dark'} rounded={true} disabled={true}/>
            <br/>
            <Btn label={'le texte'} style={'dark'} rounded={true}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'primary'} rounded={true}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'secondary'} rounded={true}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'yellow'} rounded={true}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'dark'} rounded={true}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'primary'}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'secondary'}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'yellow'}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'dark'}/>
        </>
    )
}

export default Home
