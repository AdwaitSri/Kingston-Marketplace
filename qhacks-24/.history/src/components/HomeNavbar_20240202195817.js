import React from "react";
import { Link } from "react-router-dom";

export default function HomeNavbar() {
    return (
        <div
            id="homeNavbarContainer"
            className="h-[70px] font-jose bg-orange-1"
        >
            {/*  maybe add a logo div here that links back to homepage */}
            <div
                className="w-[250px] pl-[10px] font-semibold flex items-center justify-between h-[100%]"
            >
                <img
                    src="/images/logo.png"
                    alt="logo"
                    className="h-[70%]"
                />

                <Link 
                    to="/listings"
                    className="text-2xl"
                >
                    Listings
                </Link>
                <Link 
                    to="/about"
                    className="text-2xl"
                >
                    About
                </Link>

            </div>




        </div> 
    )
}