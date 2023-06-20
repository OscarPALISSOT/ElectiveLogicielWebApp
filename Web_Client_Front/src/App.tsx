import './App.css'
import {BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Authentication from "./Pages/Authentication/Authentication.tsx";
import CreateAccount from "./Pages/CreateAccount/CreateAccount.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Authentication />} />
                <Route path="/register" element={<CreateAccount />} />
            </Routes>
        </Router>
    )
}

export default App
