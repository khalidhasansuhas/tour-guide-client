import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
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

          return  fetch('http://localhost:5000/services')
        },
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/servicesLimit')
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/servicesLimit')
                
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch (`http://localhost:5000/services/${params.id}`)
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
            
        ]
    }
])