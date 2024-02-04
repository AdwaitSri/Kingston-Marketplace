import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Listings() {
    const exampleData = [
        {
            condition: ["checked", "", "", ""],
            description: "KEVIN",
            postalcode: "K7L 0E7",
            price: "80",
            title: "Clown juice chair coffee",
            category: "Furniture"
        },
        {
            condition: ["", "checked", "", ""],
            description: "ADWAIT",
            postalcode: "K7L 1E1",
            price: "8000",
            title: "zaza table phone kevin",
            category: "Electronics"
        },
    ];

    const selectedCategoryDefault = [
        {
            id: 0,
            selected: false,
            categoryName: "Entertainment",
        },
        {
            id: 1,
            selected: false,
            categoryName: "Kitchenware",
        },
        {
            id: 2,
            selected: false,
            categoryName: "Furniture",
        },
        {
            id: 3,
            selected: false,
            categoryName: "Electronics",
        },
        {
            id: 4,
            selected: false,
            categoryName: "Other",
        },
    ]

    const selectedMaxPriceDefault = [
        {
            id: 0,
            selected: false,
            maxPrice: "10",
        },
        {
            id: 1,
            selected: false,
            maxPrice: "25",
        },
        {
            id: 2,
            selected: false,
            maxPrice: "50",
        },
        {
            id: 3,
            selected: false,
            maxPrice: "100",
        },
        {
            id: 4,
            selected: false,
            maxPrice: "250",
        },
        {
            id: 5,
            selected: false,
            maxPrice: "500",
        },
        {
            id: 6,
            selected: false,
            maxPrice: "1000",
        },
        {
            id: 7,
            selected: false,
            maxPrice: "2500",
        },
        {
            id: 8,
            selected: false,
            maxPrice: "5000",
        },
        {
            id: 9,
            selected: false,
            maxPrice: "10000",
        },
    ]

    const [selectedMaxPrice, setSelectedMaxPrice] = React.useState(selectedMaxPriceDefault);

    const [selectedCategory, setSelectedCategory] = React.useState(selectedCategoryDefault);

    const [search, setSearch] = React.useState('');
    const [searchKeywords, setSearchKeywords] = React.useState([]);

    const sellerName = "Clown LMAO CHANGE THIS LATER";

    function handleSearchSubmit(event) {
        event.preventDefault();
        const keywords = search.split(' ');
        if (search !== '') {
            setSearchKeywords(keywords);
        }
    }

    function handleSearchChange(event) {
        event.preventDefault();
        if (event.key !== 'Enter') {
            setSearch(event.target.value);
        }
    }

    function handleResetSearch(event) {
        event.preventDefault();
        setSearch('');
        setSearchKeywords([]);
    }

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

    function handleCategoryClick(event) {
        setSelectedCategory(prevSelectedCategory => {
            let index = -1;
            for (let i = 0; i < prevSelectedCategory.length; i++) {
                if (prevSelectedCategory[i].categoryName === event.target.id) {
                    index = i;
                    break;
                }
            }

            let newState = selectedCategoryDefault;
            if (index >= 0) {
                newState[index].selected = !prevSelectedCategory[index].selected;
            }

            return newState;
        })
    }

    function getSelectedCategory() {
        for (let i = 0; i < selectedCategory.length; i++) {
            if (selectedCategory[i].selected) {
                return selectedCategory[i].categoryName;
            }
        }
        return false;
    }

    function handleMaxPriceClick(event) {
        setSelectedMaxPrice(prevSelectedMaxPrice => {
            let index = -1;
            for (let i = 0; i < prevSelectedMaxPrice.length; i++) {
                if (prevSelectedMaxPrice[i].maxPrice === event.target.id) {
                    index = i;
                    break;
                }
            }

            let newState = selectedMaxPriceDefault;
            if (index >= 0) {
                newState[index].selected = !prevSelectedMaxPrice[index].selected;
            }

            return newState;
        })
    }

    function getSelectedMaxPrice() {
        for (let i = 0; i < selectedMaxPrice.length; i++) {
            if (selectedMaxPrice[i].selected) {
                return selectedMaxPrice[i].maxPrice;
            }
        }
        return false;
    }

    const listingCards = exampleData.map((data) => {
        const listCardElement = (
            <div className="flex justify-between m-[20px]">
                <Link 
                    to={{
                        pathname: '/item',
                        state: { message: 'hello from listings!' }
                    }}
                    className="w-full"
                >
                    <div 
                        className="w-full h-[200px] bg-[#f7f7f7] flex items-center"
                    >
                        <img src="/images/logo.png" alt="placeholder" className="h-[80%]"/>
                        <div className='h-full w-full p-[10px] mt-[15px] relative'>
                            <p className="font-jose font-bold text-[36px] tracking-tight h-[25%]">{data.title}</p>
                            <p className="font-jose text-[22px] tracking-tight">Condition: {getCondition(data.condition)}</p>
                            <p className="font-jose text-[22px] relative top-[-3px] tracking-tight">Seller: {sellerName}</p>
                            <p className="font-jose text-[22px] relative top-[-7px] tracking-tight">Location: {data.postalcode}</p>
                            <p className="font-jose text-[22px] relative top-[-10px] tracking-tight">Category: {data.category}</p>
                            <p className="font-jose text-[36px] relative top-[-50px] right-[10px] text-[#237515] float-right tracking-tight">Price: ${data.price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
        
        let match = {
            search: false,
            category: false,
            price: false,
        }

        if (searchKeywords[0] === '' || searchKeywords.length === 0) {
            match.search = true;
        }
        for (let i = 0; i < searchKeywords.length; i++) {
            if (data.description.toUpperCase().includes(searchKeywords[i].toUpperCase()) || data.title.toUpperCase().includes(searchKeywords[i].toUpperCase())) {
                match.search = true;
                break;
            }
        }

        if (getSelectedMaxPrice() === false) {
            match.price = true;
        }
        else if (parseFloat(getSelectedMaxPrice()) >= parseFloat(data.price)) {
            match.price = true;
        }

        if (getSelectedCategory() === data.category) {
            match.category = true;
        }
        else if (getSelectedCategory() === false) {
            match.category = true;
        }

        if (match.search && match.category && match.price) {
            return listCardElement;
        }
    });

    const filterCategories = selectedCategory.map(category => {
        const styles = category.selected ? "font-jose ml-[40px] text-[#000000] text-[24px] hover:cursor-pointer" : "font-jose ml-[40px] text-[24px] text-[#aaaaaa] hover:cursor-pointer";
        return (
        <h1 
            className={styles}
            id={category.categoryName}
            onClick={handleCategoryClick}
        >{category.categoryName}</h1>
        )
    });

    const filterMaxPrices = selectedMaxPrice.map(maxPrice => {
        const styles = maxPrice.selected ? "font-jose ml-[40px] text-[#000000] text-[24px] hover:cursor-pointer" : "font-jose ml-[40px] text-[24px] text-[#aaaaaa] hover:cursor-pointer";
        return (
        <h1 
            className={styles}
            id={maxPrice.maxPrice}
            onClick={handleMaxPriceClick}
        >&lt; ${maxPrice.maxPrice}</h1>
        )
    });

    return (
        <div 
            className="flex h-[100dvh] ml-[30px] mt-[30px]"
        >
            <div
                className="w-[15%] border-r-[1px] border-[#aaaaaa70]"
            >
                <div className="flex items-center relative right-[10px]">
                    <h1
                        className="font-jose ml-[10px] text-[32px]"
                    >Categories</h1>
                </div>
                <div>
                    {filterCategories}
                </div>

                <div className="flex items-center relative right-[10px]">
                    <h1
                        className="font-jose ml-[10px] text-[32px]"
                    >Max Price</h1>
                </div>
                <div>
                    {filterMaxPrices}
                </div>
                
            </div>

            <div
                className="w-[85%]"
            >

                <div className=" mx-[20px]">
                    <form className="w-[90%] mx-auto flex justify-between" onSubmit={handleSearchSubmit}>
                        <input 
                            className="border-2 border-black border-solid rounded-full w-[65%] pb-[10px] pl-[20px] pt-[13px] text-xl font-jose"
                            type="text" 
                            name="search" 
                            onChange={handleSearchChange}
                            value={search}
                            placeholder="Type your search here"
                        />
                        <button onClick={handleSearchSubmit} value="Search" className="border-2 border-solid border-black rounded-full px-[50px]">Search</button>
                        <button onClick={handleResetSearch} value="Reset" className="border-2 border-solid border-black rounded-full px-[50px]">Reset Search</button>
                    </form>
                </div>

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