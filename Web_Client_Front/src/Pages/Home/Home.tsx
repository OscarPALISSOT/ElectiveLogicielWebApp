import InputField from "../../Components/InputField/InputField.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import style from "./Home.module.css";
import {useEffect} from "react";
import axios from "axios";

function Home() {

    //const [foodTypes, setFoodTypes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/foodTypes')
    }, [])

    return (
        <>
            <div className={style.header}>
                <h1>Home</h1>
            </div>
            <div className={style.searchContainer}>
                <InputField
                    name={'search'}
                    radius={'rounded'}
                    style={'primary'}
                    type={'text'}
                    placeholder={'Plats, restaurant, ...'}
                    icon={<FontAwesomeIcon icon={faSearch}/>}
                />
            </div>
        </>
    )
}

export default Home
