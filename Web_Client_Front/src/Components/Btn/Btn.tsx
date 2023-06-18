import styles from './Btn.module.css';
import React from "react";
import {Link} from "react-router-dom";


interface BtnProps {
    label: string;
    link?: string;
}

const Btn: React.FC<BtnProps> = ({label, link}: BtnProps) => {

    return (
        <>
            {link ?
                <Link to={link}>
                    <button className={styles.btn}>
                        {label}

                    </button>
                </Link>
                :
                <button className={styles.btn}>
                    {label}

                </button>
            }
        </>
    )
}


export default Btn;