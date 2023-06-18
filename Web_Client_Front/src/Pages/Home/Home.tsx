import {Link} from "react-router-dom";

function Home() {

    return (
        <>
            <h1>Home</h1>
            <Link to="/about">About Us</Link>
            <br/>
            <Link to="/login">Se connecter</Link>
        </>
    )
}

export default Home
