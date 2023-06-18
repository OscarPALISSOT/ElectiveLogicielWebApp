import styles from './Btn.module.css';
import React from "react";
import {Link} from "react-router-dom";


interface BtnProps {
    label: string;
    link?: string;
    disabled?: boolean;
}

const Btn: React.FC<BtnProps> = ({label, link, disabled}: BtnProps) => {

    return (
        <>
            {link ?
                <Link to={link}>
                    <button className={styles.btn} disabled={disabled}>
                        {label}

                    </button>
                </Link>
                :
                <button className={styles.btn} disabled={disabled}>
                    {label}

                </button>
            }
        </>
    )
}


export default Btn;