import './App.css'
import {BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Authentication from "./Pages/Authentication/Authentication.tsx";
import CreateAccount from "./Pages/CreateAccount/CreateAccount.tsx";
import CreateFoodType from "./Pages/AppAdmin/FoodType/CreateFoodType/CreateFoodType.tsx";
import NotFound from "./Pages/NotFound/NotFound.tsx";
import FoodTypeAdmin from "./Pages/AppAdmin/FoodType/FoodType/FoodType.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Authentication />} />
                <Route path="/register" element={<CreateAccount />} />
                <Route path="/admin/foodTypes/add" element={<CreateFoodType />} />
                <Route path="/admin/foodTypes" element={<FoodTypeAdmin/>}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
