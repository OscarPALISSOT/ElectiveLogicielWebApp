import styles from './Btn.module.css';
import React from "react";


interface BtnProps {
    label: string;
    disabled?: boolean;
    style: 'primary' | 'secondary' | 'yellow' | 'dark';
    rounded?: boolean;
    icon?: any;
    onClick?: () => void;
}

const Btn: React.FC<BtnProps> = ({label, disabled, style, rounded, icon, onClick}: BtnProps) => {

    const btnClassName = `${styles.btn} ${style === 'primary' ? styles.primary : style === 'secondary' ? styles.secondary : style === 'yellow' ? styles.yellow : style === 'dark' && styles.dark } ${rounded && styles.rounded}`;

    return (
        <>
            <button className={btnClassName} disabled={disabled} onClick={onClick}>
                {icon}
                {label}
            </button>
        </>
    )
}


export default Btn;