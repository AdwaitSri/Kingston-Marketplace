import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import ImageGallery from "../components/ImageGallery";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div
            id="homeContainer"
            className=""
        >
            <HomeNavbar />
            <ImageGallery />
            <div className="justify-center mx-auto w-fit">
                <Link to="/signup">
                <button className="font-jose text-2xl font-semibold w-[300px] p-[6px] pt-[10px] mt-10 text-center bg-[#ff9d2b] text-[#000000] hover:bg-[#1A68FF] hover:text-[#FFFFFF] duration-150 rounded-full" href="/signup">
                    Start Shopping Today!
                </button>
                </Link>
            </div>
        </div>
    )
}