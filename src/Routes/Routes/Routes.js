import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Services from "../../Pages/Servies/Services";
import Error from "../../Pages/Shared/Error/Error";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/addservice',
                element: <AddService></AddService>
            },
            {
                path:'/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])