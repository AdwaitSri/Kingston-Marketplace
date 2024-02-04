// Import React and necessary hooks
import React from 'react';
import CreationNavbar from '../components/CreationNavbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// The main component for the form
export default function Creation() {

    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    const [price, setPrice] = React.useState('');

    const [condition, setCondition] = React.useState(
        ["", "", "", ""]
    )

    const [category, setCategory] = React.useState(
        ["", "", "", "", ""]
    )

    const sellerName = "clown";  // ! IMPORTANT ! CHANGE TO THE USER'S NAME AFTERWARDS

    function handleTitleChange(event) {
        setTitle(prevTitle => {
            let newTitle = prevTitle;
            if (event.target.value.length <= 50) {
                newTitle = event.target.value;
            }
            return newTitle;
        });
    }

    function handleDescChange(event) {
        setDesc(prevDesc => {
            let newDesc = prevDesc;
            if (event.target.value.length <= 150) {
                newDesc = event.target.value;
            }
            return newDesc;
        });
    }

    function handlePostalCodeChange(event) {
        setPostalCode(event.target.value)
    }

    function handlePriceChange(event) {
        if (!isNaN(event.target.value)) {
            setPrice(prevPrice => (event.target.value));
        }
    }

    function handleConditionChange(event) {
        setCondition(prevCondition => {
            let newCondition = "";
            const target = event.target.id;


            if (prevCondition[target] === "") {
                newCondition = "checked";
            } 

            let newState = ["", "", "", ""];
            newState[target] = newCondition;
            return newState;
        })
    }

    function handleCategoryChange(event) {
        setCategory(prevCategory => {
            let newCategory = "";
            const target = event.target.id;


            if (prevCategory[target] === "") {
                newCategory = "checked";
            } 

            let newState = ["", "", "", "", ""];
            newState[target] = newCategory;
            return newState;
        })
    }

    function getCondition() {
        let name = "";
        let index = -1;
        for (let i = 0; i < condition.length; i++) {
            if (condition[i] !== '') {
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

    function getCategory() {
        let name = "";
        let index = -1;
        for (let i = 0; i < category.length; i++) {
            if (category[i] !== '') {
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
    
    return (
        <>
        <CreationNavbar />
        <div className="w-4/5 mx-auto">
            <div className="mt-[20px] mx-auto px-4">
                <h3
                    className='font-jose font-semibold w-full mb-[20px]'
                >Enter the details of your item</h3>

                <form>
                    <div className="mb-4 flex justify-between">
                    <label className="font-jose block" htmlFor="title">
                        <p className="text-gray-700 text-sm font-semibold">Title</p>
                        <p className="text-[#aaaaaa] text-[10px]">(max 50 characters)</p>
                    </label>
                    <input
                        className="font-jose shadow appearance-none border-2 w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="title"
                        onChange={handleTitleChange}
                        type="text"
                        value={title}
                        placeholder="Enter your title here"
                    />
                    </div>

                    <div className="mb-4 flex justify-between">
                    <label className="font-jose block text-gray-700 text-sm font-semibold" htmlFor="description">
                        <p className="text-gray-700 text-sm font-semibold">Description</p>
                        <p className="text-[#aaaaaa] text-[10px]">(max 150 characters)</p>
                    </label>
                    <textarea
                        className="font-jose shadow appearance-none w-[80%] border-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="description"
                        placeholder="Enter your title here"
                        onChange={handleDescChange}
                        value={desc}
                    />
                    </div>

                    <div className="mb-2 flex justify-between">
                    <span className="font-jose text-gray-700 text-sm font-semibold mt-[11px]">Condition</span>
                    <div className="mt-2 w-[80%]">
                        <label className="font-jose inline-flex items-center">
                        <input type="radio" className="form-radio" name="condition" id="0" value="Brand New" onChange={handleConditionChange} checked={condition[0]}/>
                        <span className="font-jose ml-2">Brand New</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="condition" id="1" value="Like New" onChange={handleConditionChange} checked={condition[1]}/>
                        <span className="font-jose ml-2">Like New</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="condition" id="2" value="Lightly Used" onChange={handleConditionChange} checked={condition[2]}/>
                        <span className="font-jose ml-2">Lightly Used</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="condition" id="3" value="Used" onChange={handleConditionChange} checked={condition[3]}/>
                        <span className="font-jose ml-2">Used</span>
                        </label>
                    </div>
                    </div>

                    <div className="mb-4 flex justify-between">
                    <span className="font-jose text-gray-700 text-sm font-semibold mt-[11px]">Category</span>
                    <div className="mt-2 w-[80%]">
                        <label className="font-jose inline-flex items-center">
                        <input type="radio" className="form-radio" name="category" id="0" value="Entertainment" onChange={handleCategoryChange} checked={category[0]}/>
                        <span className="font-jose ml-2">Entertainment</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="category" id="1" value="Kitchenware" onChange={handleCategoryChange} checked={category[1]}/>
                        <span className="font-jose ml-2">Kitchenware</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="category" id="2" value="Funiture" onChange={handleCategoryChange} checked={category[2]}/>
                        <span className="font-jose ml-2">Funiture</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="category" id="3" value="Electronics" onChange={handleCategoryChange} checked={category[3]}/>
                        <span className="font-jose ml-2">Electronics</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="category" id="4" value="Other" onChange={handleCategoryChange} checked={category[4]}/>
                        <span className="font-jose ml-2">Other</span>
                        </label>
                    </div>
                    </div>

                    <div className="mb-4 flex justify-between">
                    <label className="font-jose block text-gray-700 text-sm font-semibold" htmlFor="postal-code">
                        <p className="text-gray-700 text-sm font-semibold">Postal Code</p>
                    </label>
                    <input
                        className="font-jose shadow appearance-none border-2 w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="postal-code"
                        type="text"
                        placeholder="X0X 0X0"
                        value={postalCode}
                        onChange={handlePostalCodeChange}
                    />
                    </div>

                    <div className="mb-4 flex justify-between items-center">
                    <label className="font-jose block text-gray-700 text-sm font-semibold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="font-jose shadow appearance-none border-2 w-[80%] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="price"
                        type="text"
                        placeholder="$Price"
                        value={price}
                        onChange={handlePriceChange}
                    />
                    </div>

                    <div className="mb-4 flex justify-between">
                    <label className="font-jose block text-gray-700 text-sm font-bold mb-2">
                        Images
                    </label>
                        <div
                            className='w-[80%] p-[5px] border-2 border-solid border-black'
                        >
                            <button
                                type="button"
                                className="font-jose w-full py-8 px-3 text-gray-700 text-[24px] border-2 border-dotted border-[#aaaaaa] z-10"
                            >
                                + Upload An Image
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-jose font-semibold">
                            Preview
                        </p>
                        <div 
                            className="w-4/5 h-[100px] bg-[#f7f7f7] flex items-center"
                        >
                            <img src="/images/logo.png" alt="placeholder" className="h-[80%]"/>
                            <div className='h-full w-full p-[10px] relative'>
                                <p className="font-jose font-bold tracking-tight h-[25%]">{title ? title : "Placeholder Title"}</p>
                                <p className="font-jose text-[12px] tracking-tight">Condition: {getCondition() ? getCondition() : "???"}</p>
                                <p className="font-jose text-[12px] relative top-[-3px] tracking-tight">Seller: {sellerName}</p>
                                <p className="font-jose text-[12px] relative top-[-7px] tracking-tight">Location: {postalCode ? postalCode : "???"}</p>
                                <p className="font-jose text-[12px] relative top-[-10px] tracking-tight">Category: {getCategory() ? getCategory() : "???"}</p>
                                <p className="font-jose text-[24px] relative top-[-40px] text-[#237515] float-right tracking-tight">Price: ${price ? price : "???"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="font-jose flex w-[70%] mx-auto my-[30px] justify-between items-center">

                        <motion.div
                            className='rounded-[20px] bg-[#2a2902] text-[#ffffff] hover:bg-[#333333]'
                            initial={{scale: 1.0}}
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    duration: 0.25,
                                }
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: {
                                    duration: 0.25,
                                }
                            }}
                        >
                            <Link to="/listings">
                                <button
                                    type="button"
                                    className="font-jose bg-[#2a2902] font-semibold rounded-[20px] py-2 px-8 focus:outline-none focus:shadow-outline"
                                >
                                    Cancel
                                </button>
                            </Link>
                        </motion.div>
                        <motion.div 
                            className='rounded-[20px] bg-[#2a2902] text-[#ffffff] hover:bg-[#333333]'
                            initial={{scale: 1.0}}
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    duration: 0.25,
                                }
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: {
                                    duration: 0.25,
                                }
                            }}
                        >
                            <button
                                type="submit"
                                className="font-jose font-semibold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                            >
                                Confirm
                            </button>
                        </motion.div>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};