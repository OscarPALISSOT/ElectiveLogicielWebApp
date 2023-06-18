import styles from './InputField.module.css';
import React, {HTMLInputTypeAttribute} from "react";


interface InputFieldProps{
    type: HTMLInputTypeAttribute
    label?: string;
    required?: boolean;
    name: string
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({type, label, required, name, placeholder, value, onChange}: InputFieldProps) => {

    return(
        <>
            {label && <label htmlFor={name}>{label}</label>}

            <input className={styles.inputField} type={type} id={name} name={name} required={required} placeholder={placeholder} value={value} onChange={onChange}></input>
        </>
    )
}


export default InputField;