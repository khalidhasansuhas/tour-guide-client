import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import ReviewEdit from "../../Pages/ReviewEdit/ReviewEdit";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Servies/Services";
import Error from "../../Pages/Shared/Error/Error";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        loader: async ()=>{

          return  fetch('https://tour-guide-server-mu.vercel.app/services')
        },
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('https://tour-guide-server-mu.vercel.app/servicesLimit')
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=> fetch('https://tour-guide-server-mu.vercel.app/servicesLimit')
                
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch (`https://tour-guide-server-mu.vercel.app/${params.id}`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/myreviews/edit/:id',
                element:<PrivateRoute><ReviewEdit></ReviewEdit></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
            
        ]
    }
])