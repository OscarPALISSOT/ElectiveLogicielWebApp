import styles from "../NavBar/NavBar.module.css";
import {faCartShopping, faHouse, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router";
import {useState} from "react";



const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState<string>(window.location.pathname);
    console.log(window.location.pathname);
    return(
        <>
            <div className={styles.navbar}>
                <div className={`${url ==="/" && styles.active}`}>
                    <FontAwesomeIcon icon={faHouse} size={"xl"} onClick={() => {
                        navigate("/");
                        setUrl(window.location.pathname);
                    }}/>
                </div>
                <div className={`${url ==="/about" && styles.active}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={"xl"} onClick={() => {
                        navigate("/about");
                        setUrl(window.location.pathname);
                    }}/>
                </div>
                <div className={`${url ==="/about" && styles.active}`}>
                    <FontAwesomeIcon icon={faCartShopping} size={"xl"} onClick={() => {
                        navigate("/about");
                        setUrl(window.location.pathname);
                    }}/>
                </div>
                <div className={`${url ==="/about" && styles.active}`}>
                    <FontAwesomeIcon icon={faUser} size={"xl"} onClick={() => {
                        navigate("/about");
                        setUrl(window.location.pathname);
                    }}/>
                </div>
            </div>
        </>
    )
}

export default NavBar;