import style from "./Menus.module.css";
import React from "react";
import {Menu} from "../../../Interfaces/Menu.ts";
import Btn from "../../Btn/Btn.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";


interface MenusProps {
    Menus: Menu[];
}

const Menus: React.FC<MenusProps> = ({Menus}: MenusProps) => {

    return (
        <>
            {Menus.map((menu) => {
                return (
                    <div key={menu.menuId} className={style.menuItem}>
                        <div className={style.content}>
                            <div className={style.info}>
                                <p className={style.title}>{menu.name}</p>
                                <p>{menu.description}</p>
                            </div>
                            <p className={style.price}>{menu.price}€</p>
                        </div>
                        <Btn label={'Commander'} style={'yellow'} icon={<FontAwesomeIcon icon={faCartShopping}/> }/>
                    </div>
                )
            })}
        </>
    )
}

export default Menus;