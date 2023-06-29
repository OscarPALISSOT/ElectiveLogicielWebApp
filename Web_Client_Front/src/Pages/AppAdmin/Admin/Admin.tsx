import {useNavigate} from "react-router";
import style from "./Admin.module.css";
import Btn from "../../../Components/Btn/Btn.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBurger} from "@fortawesome/free-solid-svg-icons";

function Admin() {

    const navigate = useNavigate();

    return (
        <>
            <div className={style.container}>
                <h1>Administration</h1>
                <Btn
                    label={'Catégories de restaurants'}
                    style={'primary'}
                    rounded={true}
                    onClick={() => navigate('/admin/foodtypes')}
                    icon={<FontAwesomeIcon icon={faBurger}/> }
                />
            </div>
        </>
    )
}

export default Admin