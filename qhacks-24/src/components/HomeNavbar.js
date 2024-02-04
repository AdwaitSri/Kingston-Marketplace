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
                className="flex items-center pr-[20px] justify-between w-[200px] border-black border-2 border-solid"
            >
                <Link 
                    to="/signup"
                    className="text-xl bg"
                >
                    Sign Up
                </Link>
                <Link 
                    to="/login"
                    className="text-xl"
                >
                    Log In
                </Link>
            </div>




        </div> 
    )
}