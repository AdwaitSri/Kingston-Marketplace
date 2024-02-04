import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState, useContext } from "react";
import {db} from  '../firebase';
import {storage} from "../firebase";
import NavbarSignedin from "../components/NavbarSignedin";
import {ref, listAll, getDownloadURL} from "firebase/storage";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { collection, getDocs } from "firebase/firestore";
import Context from './../components/Context';
export default function Listings() {

    const [listpr,setListpr]=useState([]);
    // const [imageList, setImageList]=useState([]);
    // const imageListRef= ref(storage,"images/");
    const listCollectionRef=collection(db,"listing");
    const { data, setData } = useContext(Context);

    const handleClick = (condition, description, postalcode, price, title, category,seller) => {
       
        const updatedData = [
            {
              condition: condition,
              description: description,
              postalcode: postalcode,
              price: price,
              title: title,
              category: category,
              seller: seller,
            },
        ];
        setData(updatedData);
      };


    useEffect(() => {
        const getList = async () => {
            const data2 = await getDocs(listCollectionRef);
            const formattedData = data2.docs.map((doc) => ({...doc.data(), id: doc.id}));
            console.log("Fetched data:", formattedData); // Add this line
            setListpr(formattedData);
        };
        getList();
        // listAll(imageListRef).then((response) => {
        //     response.items.forEach((item)=>{
        //        getDownloadURL(item).then((url)=>{
        //         setImageList((prev)=>[...prev,url]);
        //        }) 
        //     })
        //     console.log(response);
        // })


    }, []);

    
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

    const [search, setSearch] = React.useState('');
    const [searchKeywords, setSearchKeywords] = React.useState([]);
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
    

    

    
function getCategory(info) {
    if (!Array.isArray(info)) {
        // Handle the case where info is not an array or is undefined
        return "Unknown"; // or any default value you prefer
    }

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

    const listingCards = listpr.map((listpr) => {
        const listCardElement = (
            <div className="flex justify-between m-[20px]">
                 <Link
                    to='/item'
                    className="w-full"
                    onClick={() => handleClick(listpr.condition, listpr.description, listpr.postalcode, listpr.price, listpr.title, listpr.category,listpr.seller)}
                >
                    <div 
                        className="w-full h-[200px] bg-[#f7f7f7] flex items-center"
                    >
                        <img src={listpr.imageUrl} alt="placeholder" className="h-[80%]"/>
                        <div className='h-full w-full p-[10px] mt-[15px] relative'>
                            <p className="font-jose font-bold text-[36px] tracking-tight h-[25%]">{listpr.title}</p>
                            <p className="font-jose text-[22px] tracking-tight">Condition: {listpr.condition}</p>
                            <p className="font-jose text-[22px] relative top-[-3px] tracking-tight">Seller: {listpr.seller}</p>
                            <p className="font-jose text-[22px] relative top-[-7px] tracking-tight">Location: {listpr.postalcode}</p>
                            <p className="font-jose text-[22px] relative top-[-10px] tracking-tight">Category: {listpr.category}</p>
                            <p className="font-jose text-[36px] relative top-[-50px] right-[10px] text-[#237515] float-right tracking-tight">Price: ${listpr.price}</p>

                        </div>
                    </div>
                </Link>
            </div>
        )

        let match = {
            search: false,
            category: false,
        }

        if (searchKeywords[0] === '' || searchKeywords.length === 0) {
            match.search = true;
        }
        for (let i = 0; i < searchKeywords.length; i++) {
            if (listpr.description.toUpperCase().includes(searchKeywords[i].toUpperCase()) || listpr.title.toUpperCase().includes(searchKeywords[i].toUpperCase())) {
                match.search = true;
                break;
            }
        }

        if (getSelectedCategory() === getCategory(listpr.category)) {
            match.category = true;
        }
        else if (getSelectedCategory() === false) {
            match.category = true;
        }
        else {
            ;
        }

        console.log(match);

        if (match.search && match.category) {
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

    return (
        <div className="">
            <NavbarSignedin></NavbarSignedin>
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
            ><div className=" mx-[20px]">
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
        </div>
    )

}