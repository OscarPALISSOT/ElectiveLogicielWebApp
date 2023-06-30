import style from '../AdminItem/AdminItem.module.css';
import Btn from '../../Btn/Btn.tsx';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faTrash} from "@fortawesome/free-solid-svg-icons";

interface AdminItemProps {
    title: string;
    image?: string;
    preview?: string;
    onDelete?: () => void
    onUpdate?: () => void;
}

const AdminItem: React.FC<AdminItemProps> = ({ title, image, preview, onUpdate, onDelete}: AdminItemProps) => {

    return (
        <>
            <div className={style.container}>

                <div className={style.contentContainer}>
                    <h2 className={style.title}>{title}</h2>

                    <div className={style.thumbnail}>
                        {image && <img crossOrigin={"anonymous"} src={image} alt={title}/>}
                    </div>

                    {preview && <p>{preview}</p>}
                </div>

                <div className={style.buttonContainer}>
                    <Btn label={'Modifier'} style={'secondary'} rounded={true} onClick={onUpdate} icon={<FontAwesomeIcon icon={faGear}/> }/>
                    <Btn label={'Supprimer'} style={'dark'} rounded={true} onClick={onDelete} icon={<FontAwesomeIcon icon={faTrash}/> }/>
                </div>
            </div>
        </>
    )
}

export default AdminItem;