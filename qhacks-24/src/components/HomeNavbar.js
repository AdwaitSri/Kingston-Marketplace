import React from "react";
import { Link } from "react-router-dom";

export default function HomeNavbar() {
    return (
        <div
            id="homeNavbarContainer"
            className="h-[70px] font-jose bg-orange-1 flex items-center justify-between"
        >
            {/*  maybe add a logo div here that links back to homepage */}
            <div
                className="w-[230px] pl-[10px] font-semibold flex items-center justify-between h-[100%]"
            >
                <img
                    src="/images/logo.png"
                    alt="logo"
                    className="h-[70%]"
                />

                <Link 
                    to="/listings"
                    className="text-xl"
                >
                    Listings
                </Link>
                <Link 
                    to="/about"
                    className="text-xl"
                >
                    About
                </Link>
            </div>
            <div
                className="flex items-center justify-between mr-[20px] w-[230px]"
            >
                <Link 
                    to="/signup"
                    className="text-xl w-[110px] text-center bg-[#000000] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] duration-150 p-[4px] pt-[6px] rounded-full tracking-tight"
                >
                    Sign Up
                </Link>
                <Link 
                    to="/signin"
                    className="text-xl w-[110px] text-center bg-[#000000] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] duration-150 p-[4px] pt-[5.5px] rounded-full tracking-tight"
                >
                    Log In
                </Link>
            </div>




        </div> 
    )
}