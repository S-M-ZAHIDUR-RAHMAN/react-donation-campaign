import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {

    const locationPage = useLocation()

    useEffect(()=> {
        if(locationPage.pathname==="/"){
            document.title = `DonationCamp - Home`
        }
        else{
            document.title = `DonationCamp ${locationPage.pathname.replace("/",'- ')}`
        }
        

    },[locationPage.pathname])
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>

    );
};

export default MainLayout;
