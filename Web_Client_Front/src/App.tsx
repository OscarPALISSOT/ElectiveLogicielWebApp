import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import Authentication from "./Pages/Authentication/Authentication.tsx";
import CreateAccount from "./Pages/CreateAccount/CreateAccount.tsx";
import CreateFoodType from "./Pages/AppAdmin/FoodType/CreateFoodType/CreateFoodType.tsx";
import NotFound from "./Pages/NotFound/NotFound.tsx";
import FoodTypeAdmin from "./Pages/AppAdmin/FoodType/FoodType/AdminFoodType.tsx";
import CreateRestaurant from "./Pages/RestaurantAdmin/CreateRestaurants/CreateRestaurant.tsx";
import Search from "./Pages/Search/Search.tsx";
import Admin from "./Pages/AppAdmin/Admin/Admin.tsx";
import ProtectedRoute from "./Modules/ProtectedRoute.tsx";
import AdminRestaurants from "./Pages/RestaurantAdmin/Restaurants/AdminRestaurants.tsx";
import SingleRestaurant from "./Pages/Restaurants/SingleRestaurant/SingleRestaurant.tsx";
import ArchiveRestoByCat from "./Pages/Restaurants/ArchiveRestoByCat/ArchiveRestoByCat.tsx";

function App() {
    return (
        <Router>
            <Routes>


                {/* <Route path="/about" element={<About/>}/> */}

                {/* Routes for authentication */}
                <Route path="/login" element={<Authentication/>}/>
                <Route path="/register" element={<CreateAccount/>}/>

                {/* Mains routes */}
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



                {/* Restaurant */}
                <Route path="/restaurant/:id" element={
                    <ProtectedRoute element={
                        <SingleRestaurant/>}
                    />
                }/>
                <Route path="/restaurants/foodtype/:label" element={
                    <ProtectedRoute element={
                        <ArchiveRestoByCat/>}
                    />
                }/>


                {/* Admin */}
                <Route path="/admin" element={
                    <ProtectedRoute element={
                        <Admin/>
                    }/>
                }/>


                {/* Admin for food types */}
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


                {/* Admin for restaurants */}
                <Route path="/admin/restaurants" element={
                    <ProtectedRoute element={
                        <AdminRestaurants/>
                    }/>
                }/>
                <Route path="/admin/restaurants/add" element={
                    <ProtectedRoute element={
                        <CreateRestaurant/>
                    }/>
                }/>


                {/* 404 page */}
                <Route path='*' element={<NotFound/>}/>


            </Routes>
        </Router>
    )
}

export default App
