import style from "./NotFound.module.css";
import logo from "../../Assets/img/logo.svg";


function NotFound() {

    return (
        <>
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={logo} alt=""/>
                </div>
                <h1>404, Page not found</h1>
            </div>
        </>
    )
}

export default NotFound
