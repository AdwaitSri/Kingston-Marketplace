// Import React and necessary hooks
import React from 'react';
import CreationNavbar from '../components/CreationNavbar';

// The main component for the form
export default function Creation() {

    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    const [price, setPrice] = React.useState('');

    function handleTitleChange(event) {
        setTitle(prevTitle => (event.target.value));
    }

    function handleDescChange(event) {
        setDesc(prevDesc => (event.target.value));
    }

    function handlePostalCodeChange(event) {
        setPostalCode(prevPostalCode => (event.target.value));
    }

    function handlePriceChange(event) {
        setPrice(prevPrice => (event.target.value));
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

                    <div className="mb-4 flex justify-between">
                    <span className="font-jose text-gray-700 text-sm font-semibold mt-[11px]">Condition</span>
                    <div className="mt-2 w-[80%]">
                        <label className="font-jose inline-flex items-center">
                        <input type="radio" className="form-radio" name="condition" value="Brand New" />
                        <span className="font-jose ml-2">Brand New</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="condition" value="Like New" />
                        <span className="font-jose ml-2">Like New</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="condition" value="Lightly Used" />
                        <span className="font-jose ml-2">Lightly Used</span>
                        </label>
                        <label className="font-jose inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="condition" value="Used" />
                        <span className="font-jose ml-2">Used</span>
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
                            className="w-4/5 h-[100px] border-2 border-black border-solid"
                        >
                        </div>
                    </div>

                    <div className="font-jose flex justify-between items-center">
                        <button
                            type="button"
                            className="font-jose bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="font-jose bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};