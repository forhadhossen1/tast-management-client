import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";

const Main = () => {
    return (
        <div className="md:container md:mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;