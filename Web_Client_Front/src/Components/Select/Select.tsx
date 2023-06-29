import styles from './Select.module.css';
import React from "react";


interface SelectProps{
    label?: string;
    required?: boolean;
    name: string
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
    style: 'primary' | 'secondary' | 'yellow' | 'dark';
    radius?: 'rounded' | 'smooth';
    icon?: any;
    autoComplete?: string;
    options?: string[];
}

const Select: React.FC<SelectProps> = ({label, required, name, placeholder, value, style, radius, icon, autoComplete, options, onChange}: SelectProps) => {

    const selectContainerClassName = `${styles.selectContainer} ${style === 'primary' ? styles.primary : style === 'secondary' ? styles.secondary : style === 'yellow' ? styles.yellow : style === 'dark' && styles.dark } ${radius == 'rounded' ? styles.rounded : radius == 'smooth' && styles.smoothRadius}`;
    const selectClassName = `${styles.select} ${style === 'dark' && styles.darkInput } ${radius && styles.radiusInput}`;

    return(
        <>
            <div className={selectContainerClassName}>
                {label && <label htmlFor={name}>{label}</label>}

                {icon}

                <select
                    className={selectClassName}
                    id={name}
                    name={name}
                    required={required}
                    value={value}
                    autoComplete={autoComplete}
                    onChange={onChange}
                >
                    <option value="">{placeholder}</option>
                    {options && options.map((option) => {
                        return <option value={option} key={option}>{option}</option>
                    })}
                </select>
            </div>
        </>
    )
}


export default Select;