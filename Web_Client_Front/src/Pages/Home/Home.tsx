import {Link} from "react-router-dom";
import Btn from "../../Components/Btn/Btn.tsx";
import InputField from "../../Components/InputField/InputField.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBurger, faCartShopping} from "@fortawesome/free-solid-svg-icons";


function Home() {

    return (
        <>
            <div className="logo" style={{width: '258px', height: '258px'}}>
                <img src="./src/Assets/img/logo.svg" alt="" style={{width: '100%', height: 'auto'}}/>
            </div>

            <h1>Home</h1>
            <Link to="/about">About Us</Link>
            <br/>
            <Link to="/login">Se connecter</Link>
            <br/>
            <Btn label={'le texte'} style={'primary'} icon={<FontAwesomeIcon icon={faBurger}/>}/>
            <br/>
            <Btn label={'le texte'} style={'secondary'} icon={<FontAwesomeIcon icon={faBurger}/>}/>
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
            <Btn label={'le texte'} style={'dark'} rounded={true} icon={<FontAwesomeIcon icon={faBurger}/>}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'primary'} rounded={true} icon={<FontAwesomeIcon icon={faCartShopping}/>}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'secondary'} rounded={true}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'yellow'} rounded={true}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'dark'} rounded={true}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'primary'} icon={<FontAwesomeIcon icon={faBurger}/>}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'secondary'}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'yellow'} icon={<FontAwesomeIcon icon={faBurger}/>}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'dark'} icon={<FontAwesomeIcon icon={faBurger}/>}/>


        </>
    )
}

export default Home
