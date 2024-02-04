import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle clicking outside of the dropdown to close it
    useEffect(() => {
            function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

  return (
    <div
        id="homeNavbarContainer"
        className="h-[70px] font-jose bg-[#ff9d2b] flex items-center justify-between"
    >
        {/* Left Section, Logo, Listings, About*/}
        <div
            className="w-[230px] flex items-center font-semibold h-full"
        >
            <div className='p-3'>
                <Link to="/" className="w-[80px]">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="w-fit"
                    />
                </Link>
            </div>

            <div className="flex">
                <Link 
                    to="/listings"
                    className="text-xl hover:underline pr-4"
                >
                    Listings
                </Link>
                <Link 
                    to="/about"
                    className="text-xl hover:underline"
                >
                    About
                </Link>
            </div>
        </div>

        {/* Right Section, Logo, Listings, About*/}

        <div className="flex items-center mr-4">

            <div
                className="flex items-center mr-4"
            >
                <Link 
                    to="/creation"
                    className="text-lg w-[130px] text-center bg-[#000000] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] duration-150 p-[2px] pt-[6px] rounded-full tracking-tight"
                >
                    Add Listing
                </Link>
            </div>


            <div className="relative rounded-full ring-2 ring-offset-2 ring-offset-orange-300 ring-white" ref={dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-300 focus:ring-blue-200">
                    <img className="h-8 w-8 rounded-full" src="/images/default.jpg" alt="User profile" />
                </button>
                
                <div className={`origin-top-right absolute right-3 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                    <a href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account information</a>
                    <a href="/listings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your listings</a>
                    <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log out</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;