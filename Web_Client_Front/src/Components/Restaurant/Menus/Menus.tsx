import style from "./Menus.module.css";
import React from "react";
import {Menu} from "../../../Interfaces/Menu.ts";


interface MenusProps {
    Menus: Menu[];
}

const Menus: React.FC<MenusProps> = ({Menus}: MenusProps) => {

    return (
        <>
            {Menus.map((menu) => {
                return (
                    <div key={menu.menuId} className={style.menuItem}>
                        <p>{menu.name}</p>
                        <p>{menu.description}</p>
                        <p>{menu.price}€</p>
                    </div>
                )
            })}
        </>
    )
}

export default Menus;