import React, { useContext, useState } from 'react';
import Context from './../components/Context';
import NavbarSignedin from "../components/NavbarSignedin";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Item() {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1); // This will navigate back to the previous page
    };

    const { data, setData } = useContext(Context);

      const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

    return (
        <div
            id="homeContainer"
            className=""
        >
            <NavbarSignedin></NavbarSignedin>
            <div
                className="flex h-screen font-jose"
            >
                {/* Left half, image display */}
                <div className="w-[40%] bg-red-100 flex flex-col">
                    <button
                        className="w-fit mt-7 mx-4 pt-2 bg-yellow-100 px-3 py-1 text-xl flex flex-row hover:bg-orange-500"
                        onClick={handleBackButtonClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px] mr-1'>
                            <path d="m26.105 21.891c-.229 0-.439-.131-.529-.346-.066-.156-1.716-3.857-7.885-4.59-1.285-.156-2.824-.236-4.693-.25v4.613c0 .213-.115.406-.304.508-.188.098-.413.084-.588-.033l-11.852-7.978c-.16-.107-.254-.287-.254-.476 0-.191.094-.365.254-.477l11.857-7.979c.175-.121.398-.129.588-.029.19.102.303.295.303.502v4.293c2.578.336 13.674 2.33 13.674 11.674 0 .271-.191.508-.459.562-.037.006-.076.006-.112.006z"/></svg>
                        <div className='pt-[1px]'>
                            Back
                        </div>
                    </button>

                    <div className='flex flex-col items-center'>
                    <motion.button
                        initial={{ scale: 1.0 }}
                        whileHover={{
                        scale: 1.05,
                        transition: {
                            duration: 0.25,
                        },
                        }}
                        className="p-3 pb-2 w-[400px] h-[400px] relative my-4 hover:cursor-zoom-in"
                        onClick={toggleModal} // Open modal on click
                    >
                        <img
                            src="/images/img1.jpeg"
                            alt='itempic'
                            className='w-full h-full object-cover'
                        />
                    </motion.button>

                    {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      className="modal-content bg-white p-6 rounded-lg shadow-lg relative" // Ensure this has 'relative' positioning
    >
      <button onClick={toggleModal} className="absolute top-0 right-0 m-4">
      <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>

      </button>
      <img
        src="/images/img1.jpeg"
        alt='Expanded itempic'
        className='object-contain h-[80vh] w-[80vw] max-w-[600px] max-h-[600px]'
      />
    </motion.div>
  </div>
)}
                        
                        <div className="w-fit mx-auto">
                            Press image to zoom in
                        </div>

                        <div className="w-fit mx-auto text-2xl pt-3 text-[#237515]">
                            Price: ${data[0].price}
                        </div>
                    </div>
                </div>

                {/* Right half, info display */}
                <div className="w-[60%] bg-red-100">
                    <div className="ml-7 mt-7 mr-7 mb-1 text-5xl leading-relaxed">
                        {data[0].title}
                    </div>
                    <div className='italic text-gray-600 ml-8 mb-1 text-xl'>
                        Category: {data[0].category}
                    </div>
                    <div className='italic text-gray-600 ml-8 my-1 text-xl'>
                        Condition: {data[0].condition}
                    </div>
                    <div className='italic text-gray-600 ml-8 my-1 text-xl'>
                        Approximate Item Location: <a
                        href={`https://www.google.ca/maps/search/${encodeURIComponent(data[0].postalcode)}`}
                        className='underline hover:text-blue-600'
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            {data[0].postalcode}
                        </a>
                    </div>

                    <div className="w-full flex flex-row items-center mt-3 justify-between">
                        <div className='flex flex-row'>
                            <img
                                src="/images/default.jpg"
                                className="h-[40px] ml-6 mr-2 rounded-full"
                                alt='userpic'
                            >    
                            </img>
                            <div className='flex items-center pt-1 text-xl'>
                                Seller: @Adwait!!! Come and rescue!
                            </div>
                        </div>
                        {/* <div className='ml-5 mr-5 pt-1 text-lg'>
                            Date Posted: XX-XX-XXXX
                        </div> */}
                    </div>

                    <div className='mt-5 ml-7 text-2xl leading-relaxed text-gray-800'>
                        {data[0].description}
                    </div>
                    <div className='mt-5 ml-7 text-lg leading-relaxed text-gray-800'>
                        Interested? Contact the seller below!
                    </div>
                    <div className='w-fit mx-auto'>
                        <button className='text-white bg-red-600 text-2xl m-3 pt-5 p-3 hover:bg-blue-600 hover:text-white duration-150'>
                            Contact Seller via. Email/Phone
                        </button>
                    </div>
                </div>
                <div>
    </div>

            </div>

        </div>
    )
}