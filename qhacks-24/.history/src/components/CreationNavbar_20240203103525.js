import React from "react";

export default function CreationNavbar() {
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
            </div>
        </div>
    )
}