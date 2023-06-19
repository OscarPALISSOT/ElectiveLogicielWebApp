import styles from './Btn.module.css';
import React from "react";
import {Link} from "react-router-dom";


interface BtnProps {
    label: string;
    link?: string;
    disabled?: boolean;
    style: 'primary' | 'secondary' | 'yellow' | 'dark';
    rounded?: boolean;
}

const Btn: React.FC<BtnProps> = ({label, link, disabled, style, rounded}: BtnProps) => {

    const btnClassName = `${styles.btn} ${style === 'primary' ? styles.primary : style === 'secondary' ? styles.secondary : style === 'yellow' ? styles.yellow : style === 'dark' && styles.dark } ${rounded && styles.rounded}`;

    return (
        <>
            {link ?
                <Link to={link}>
                    <button
                        className={btnClassName}
                        disabled={disabled}>
                        {label}
                    </button>
                </Link>
                :
                <button className={btnClassName} disabled={disabled}>
                    {label}
                </button>
            }
        </>
    )
}


export default Btn;