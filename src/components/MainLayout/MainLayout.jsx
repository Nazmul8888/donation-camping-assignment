import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



const MainLayout = () => {
    return (
        <div>

            <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;