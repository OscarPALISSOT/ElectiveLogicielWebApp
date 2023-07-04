import style from "./Menus.module.css";
import React from "react";
import {Menu} from "../../../Interfaces/Menu.ts";
import {useNavigate} from "react-router";


interface MenusProps {
    Menus: Menu[];
}

const Menus: React.FC<MenusProps> = ({Menus}: MenusProps) => {

    const navigate = useNavigate();

    return (
        <>
            <div className={style.carrouselContainer}>
                {Menus.map((menu) => (
                    <div key={menu.menuId} className={style.carrouselItem}>
                        <div className={style.thumbnail}>
                            <img crossOrigin={"anonymous"} src={import.meta.env.VITE_BACK_HOST + import.meta.env.VITE_URL_MS_MENU + '/getFoodTypeThumbnail?menuIcons=' + menu.icon} alt=""/>
                        </div>
                        <p>{menu.name}</p>
                        <p>{menu.price} €</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Menus;