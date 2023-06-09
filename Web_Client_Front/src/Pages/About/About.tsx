import {Link} from "react-router-dom";
import Btn from "../../Components/Btn/Btn.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBurger, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import InputField from "../../Components/InputField/InputField.tsx";
import InputFile from "../../Components/InputFile/InputFile.tsx";


function About() {

    return (
        <>
            <h1>About us</h1>


            <div className="logo" style={{width: '258px', height: '258px'}}>
                <img src="./src/Assets/img/logo.svg" alt="" style={{width: '100%', height: 'auto'}}/>
            </div>

            <h1>Home</h1>

            <InputFile id={'test'}/>
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
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'primary'} radius={'rounded'}
                        icon={<FontAwesomeIcon icon={faCartShopping}/>}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'secondary'} radius={'smooth'}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'yellow'} radius={'smooth'}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'dark'} radius={'smooth'}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'primary'}
                        icon={<FontAwesomeIcon icon={faBurger}/>}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'secondary'}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'yellow'}
                        icon={<FontAwesomeIcon icon={faBurger}/>}/>
            <br/>
            <InputField placeholder={'test'} name={'name'} type={'text'} style={'dark'}
                        icon={<FontAwesomeIcon icon={faBurger}/>}/>

        </>
    )
}

export default About
