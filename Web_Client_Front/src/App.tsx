import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Authentication from "./Pages/Authentication/Authentication.tsx";
import CreateAccount from "./Pages/CreateAccount/CreateAccount.tsx";
import CreateFoodType from "./Pages/AppAdmin/FoodType/CreateFoodType/CreateFoodType.tsx";
import NotFound from "./Pages/NotFound/NotFound.tsx";
import FoodTypeAdmin from "./Pages/AppAdmin/FoodType/FoodType/AdminFoodType.tsx";
import CreateRestaurant from "./Pages/RestaurantAdmin/CreateRestaurant.tsx";
import Search from "./Pages/Search/Search.tsx";
import Admin from "./Pages/AppAdmin/Admin/Admin.tsx";
import ProtectedRoute from "./Modules/ProtectedRoute.tsx";

function App() {


    return (
        <Router>
            <Routes>

                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Authentication/>}/>
                <Route path="/register" element={<CreateAccount/>}/>

                <Route path="/" element={
                    <ProtectedRoute element={
                        <Home/>}
                    />}
                />
                <Route path="/search" element={
                    <ProtectedRoute element={
                        <Search/>}
                    />
                }/>


                <Route path="/admin" element={
                    <ProtectedRoute element={
                        <Admin/>
                    }/>
                }/>
                <Route path="/admin/foodTypes" element={
                    <ProtectedRoute element={
                        <FoodTypeAdmin/>
                    }/>
                }/>
                <Route path="/admin/foodTypes/add" element={
                    <ProtectedRoute element={
                        <CreateFoodType/>
                    }/>
                }/>


                <Route path="/admin/restaurants" element={
                    <ProtectedRoute element={
                        <FoodTypeAdmin/>
                    }/>
                }/>
                <Route path="/admin/restaurants/add" element={
                    <ProtectedRoute element={
                        <CreateRestaurant/>
                    }/>
                }/>


                <Route path='*' element={<NotFound/>}/>


            </Routes>
        </Router>
    )
}

export default App
