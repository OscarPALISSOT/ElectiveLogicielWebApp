//Rectangle + nom de l'item + deux bouton update et del
import style from '../AdminItem/AdminItem.module.css';
import Btn from '../../Btn/Btn.tsx';
import React from 'react';
import logo from "../../../Assets/img/logo.svg";

interface AdminItemProps{
    label: string;
    image?: string;
    preview?: string;
    onDelete?: () => void
    onUpdate?: () => void;
}

const AdminItem: React.FC<AdminItemProps> = ({label, image, preview, onUpdate, onDelete}: AdminItemProps) => {
    
    return (
        <>
            <div className={style.container}>
                <img src={logo} alt="Image temporaire" className={style.img}/>
                {image && <img src={image} alt={label} className={style.img}/>}
                
                <h2 className={style.header}>{label}</h2>
                    {label && <p>{preview}</p>}
                <div className={style.buttonContainer}>
                    <Btn label={'Mettre à jour'} style={'primary'} rounded={true} onClick={onUpdate} />
                    <Btn label={'Supprimer'} style={'dark'} rounded={true} onClick={onDelete}/>
                </div>
            </div>
        </>
    )
}

export default AdminItem;