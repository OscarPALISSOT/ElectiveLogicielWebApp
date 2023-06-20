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
    style: 'primary' | 'secondary' | 'yellow' | 'dark';
    rounded?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({type, label, required, name, placeholder, value, onChange, style, rounded}: InputFieldProps) => {

    const inputFieldClassName = `${styles.inputField} ${style === 'primary' ? styles.primary : style === 'secondary' ? styles.secondary : style === 'yellow' ? styles.yellow : style === 'dark' && styles.dark } ${rounded && styles.rounded}`;

    return(
        <>
            {label && <label htmlFor={name}>{label}</label>}

            <input className={inputFieldClassName} type={type} id={name} name={name} required={required} placeholder={placeholder} value={value} onChange={onChange}></input>
        </>
    )
}


export default InputField;