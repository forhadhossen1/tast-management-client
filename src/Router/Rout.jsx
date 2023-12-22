import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutPage from "../Pages/About/AboutPage";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <PrivetRout><Dashboard></Dashboard></PrivetRout>
            },
            {
                path: '/about',
                element: <PrivetRout><AboutPage></AboutPage></PrivetRout>
            }
        ]
    },
]);

export default router