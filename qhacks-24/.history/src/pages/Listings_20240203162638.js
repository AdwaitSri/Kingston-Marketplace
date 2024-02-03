import React from "react";
import { Link } from "react-router-dom";

export default function Listings() {
    const exampleData = [
        {
            condition: ["checked", "", "", ""],
            description: "Test 2",
            postalcode: "K7L 0E7",
            price: "80",
            title: "Test",
            category: ["", "", "checked", "", ""]
        },
        {
            condition: ["", "checked", "", ""],
            description: "zazas",
            postalcode: "K7L 1E1",
            price: "8000",
            title: "Test title",
            category: ["", "", "", "checked", ""]
        },
    ];

    const sellerName = "Clown LMAO CHANGE THIS LATER";

    function getCondition(info) {
        let name = "";
        let index = -1;
        for (let i = 0; i < info.length; i++) {
            if (info[i] !== '') {
                index = i;
                break;
            }
        }
        const conditions = ["Brand New", "Like New", "Lightly Used", "Used"];
        if (index >= 0) {
            name = conditions[index];
        }
        return name;
    }

    function getCategory(info) {
        let name = "";
        let index = -1;
        for (let i = 0; i < info.length; i++) {
            if (info[i] !== '') {
                index = i;
                break;
            }
        }
        const categories = ["Entertainment", "Kitchenware", "Furniture", "Electronics", "Other"];
        if (index >= 0) {
            name = categories[index];
        }
        return name;
    }

    const listingCards = exampleData.map((data) => {
        return (
            <div className="flex justify-between m-[20px]">
                <Link 
                    to={{
                        pathname: '/item',
                        state: { message: 'hello from listings!' }
                    }}
                    className="w-full"
                >
                    <div 
                        className="w-full h-[100px] bg-[#f7f7f7] flex items-center"
                    >
                        <img src="/images/logo.png" alt="placeholder" className="h-[80%]"/>
                        <div className='h-full w-full p-[10px] relative'>
                            <p className="font-jose font-bold tracking-tight h-[25%]">{data.title}</p>
                            <p className="font-jose text-[12px] tracking-tight">Condition: {getCondition(data.condition)}</p>
                            <p className="font-jose text-[12px] relative top-[-3px] tracking-tight">Seller: {sellerName}</p>
                            <p className="font-jose text-[12px] relative top-[-7px] tracking-tight">Location: {data.postalcode}</p>
                            <p className="font-jose text-[12px] relative top-[-10px] tracking-tight">Category: {getCategory(data.category) ? getCategory(data.category) : "???"}</p>
                            <p className="font-jose text-[24px] relative top-[-40px] text-[#237515] float-right tracking-tight">Price: ${data.price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });

    return (
        <div 
            className="flex h-[100dvh] m-[30px]"
        >
            <div
                className="w-1/5 border-r-[1px] border-[#aaaaaa70] flex items-center"
            >
                <svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_12_3)">
            <path d="M8.3229 10.9862C12.2787 16.0583 19.5833 25.4583 19.5833 25.4583V37.2083C19.5833 38.2854 20.4646 39.1666 21.5416 39.1666H25.4583C26.5354 39.1666 27.4167 38.2854 27.4167 37.2083V25.4583C27.4167 25.4583 34.7017 16.0583 38.6575 10.9862C39.6562 9.69373 38.7358 7.83331 37.1104 7.83331H9.86998C8.24457 7.83331 7.32415 9.69373 8.3229 10.9862Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_12_3">
            <rect width="47" height="47" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            
                Filter
            </div>

            <div
                className="w-4/5"
            >
                <div className="flex justify-between m-[20px]">
                    <div 
                        className="w-full h-[100px] bg-[#f7f7f7] flex items-center"
                    >
                        <Link 
                            to="/creation" 
                            className="border-[6px] border-[#ff9d2b] w-full h-full text-3xl font-normal text-[#616272] bg-[#ffedd8]"
                        >
                            <button
                                className="font-jose relative top-[3px] text-center w-full h-full text-3xl"
                            >
                                + Add Your Listings Here!
                        </button>
                        </Link>
                    </div>
                </div>
                {listingCards}
            </div>
        </div>
    )

}