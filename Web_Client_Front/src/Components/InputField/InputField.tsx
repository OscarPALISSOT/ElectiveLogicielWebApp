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
    icon?: any;
}

const InputField: React.FC<InputFieldProps> = ({type, label, required, name, placeholder, value, onChange, style, rounded, icon}: InputFieldProps) => {

    const inputFieldContainerClassName = `${styles.inputFieldContainer} ${style === 'primary' ? styles.primary : style === 'secondary' ? styles.secondary : style === 'yellow' ? styles.yellow : style === 'dark' && styles.dark } ${rounded && styles.rounded}`;
    const inputFieldClassName = `${styles.inputField} ${style === 'dark' && styles.darkInput } ${rounded && styles.roundedInput}`;

    return(
        <>
            <div className={inputFieldContainerClassName}>
                {label && <label htmlFor={name}>{label}</label>}

                {icon}

                <input className={inputFieldClassName} type={type} id={name} name={name} required={required} placeholder={placeholder} value={value} onChange={onChange}></input>
            </div>
        </>
    )
}


export default InputField;