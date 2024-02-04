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
    const [selectedCategory, setSelectedCategory] = React.useState(selectedCategoryDefault);



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
                            <p className="font-jose text-[22px] relative top-[-10px] tracking-tight">Category: {getCategory(data.category) ? getCategory(data.category) : "???"}</p>
                            <p className="font-jose text-[36px] relative top-[-50px] right-[10px] text-[#237515] float-right tracking-tight">Price: ${data.price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )

        if (getSelectedCategory() === getCategory(data.category)) {
            return listCardElement;
        }
        else if (getSelectedCategory() === false) {
            return listCardElement;
        }
        else {
            ;
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

    return (
        <div 
            className="flex h-[100dvh] ml-[30px] mt-[30px]"
        >
            <div
                className="w-[15%] border-r-[1px] border-[#aaaaaa70]"
            >
                <div className="flex items-center relative right-[10px]">
                    <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 12L25 1" stroke="black" stroke-width="2"/>
                    </svg>
                    <h1
                        className="font-jose ml-[10px] text-[32px]"
                    >Categories</h1>
                </div>
                <div>
                    {filterCategories}
                </div>
                
            </div>

            <div
                className="w-[85%]"
            >
                <div className=" mx-[20px]">
                    <form className="w-full flex">
                        <input 
                            className="border-2 border-black border-solid rounded-full w-[90%] p-2"
                            type="text" 
                            name="search" 
                            placeholder="Type your search here"
                        />
                        <button type="submit" value="Search" className="border-2 border-solid border-black rounded-full px-[50px]">Search</button>
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