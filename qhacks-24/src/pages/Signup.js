import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for handling errors
   
    const signUp = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter both email and password."); // Check if email or password is empty
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                setError('Signup complete, proceed to sign in below.'); // Clear error on successful sign up
            })
            .catch((error) => {
                setError(error.message); // Set error message from Firebase
            });
    };

    return (
        <div className='flex flex-col w-full h-full items-center justify-center min-h-screen bg-gradient-to-b from-[#ffac7c] to-[#f8f0c2b8]'>
            <div id='justformargin' className='p-4 absolute left-0 top-0'>
                <div id="logo" className='w-full h-[90px]'>
                    <Link
                        to="/"
                    >
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="h-[90%]"
                        />
                    </Link>
                </div>
            </div>
            <div className='flex w-[60%]'>
                
                <div className="w-full rounded-lg bg-[#ff9d2b] shadow sm:max-w-md xl:p-0 mx-auto">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </h1>

                        {error && <p className="text-white">{error}</p>} {/* Display error message */}

                        <form onSubmit={signUp} className="space-y-4 md:space-y-6" method="POST">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 ">Email</label>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                                className="outline-none bg-[#dcdcdc] hover:bg-[#f0f0f0] focus:bg-[#ffffff] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-3 " placeholder="samplemail@email.com" required />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                                className="outline-none bg-[#dcdcdc] hover:bg-[#f0f0f0] focus:bg-[#ffffff] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-3 mb-[30px]" placeholder="••••••••" required />
                            </div>

                        <motion.div 
                            className="bg-[#2a2902] hover:bg-[#333333] w-full z-10 font-medium rounded-lg text-sm text-center"
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
                            <button type="submit" className="text-[#ffffff] w-full h-full rounded-lg px-5 py-2.5">Create an account</button>
                        </motion.div>
                            <p className="text-sm font-light text-gray-700 ">Already have an account? <a
                                className="pl-[5px] font-medium text-blue-600 hover:underline " href="/signin">Sign in here</a>
                            </p>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Signup;
