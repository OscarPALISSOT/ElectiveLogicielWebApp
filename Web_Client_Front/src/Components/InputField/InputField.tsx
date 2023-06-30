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
    radius?: 'rounded' | 'smooth';
    icon?: any;
    autoComplete?: string;
}

const InputField: React.FC<InputFieldProps> = ({type, label, required, name, placeholder, value, onChange, style, radius, icon, autoComplete}: InputFieldProps) => {

    const inputFieldContainerClassName = `${styles.inputFieldContainer} ${style === 'primary' ? styles.primary : style === 'secondary' ? styles.secondary : style === 'yellow' ? styles.yellow : style === 'dark' && styles.dark } ${radius == 'rounded' ? styles.rounded : radius == 'smooth' && styles.smoothRadius}`;
    const inputFieldClassName = `${styles.inputField} ${style === 'dark' && styles.darkInput } ${radius && styles.radiusInput}`;

    return(
        <>
            <div className={inputFieldContainerClassName}>
                {label && <label htmlFor={name}>{label}</label>}

                {icon}

                <input
                    className={inputFieldClassName}
                    type={type}
                    id={name}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                ></input>
            </div>
        </>
    )
}


export default InputField;