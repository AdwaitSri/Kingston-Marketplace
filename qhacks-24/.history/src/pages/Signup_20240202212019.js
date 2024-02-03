import React from "react";
import { motion } from "framer-motion";

export default function Signup() {
    const [formData, setFormData] = React.useState(
        {
            email: '',
            password: '',
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    

    return (
    <div
    class="w-full rounded-lg bg-orange-1 shadow dark:border md:mt-[10dvh] sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-[10dvh]">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
            account
        </h1>
        <form class="space-y-4 md:space-y-6" method="POST">
            <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email address</label>
            <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} class="outline-none bg-[#dcdcdc] hover:bg-[#f0f0f0] focus:bg-[#ffffff] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@gmail.com" required="">
            </input>
            </div>

            <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} placeholder="••••••••••" class="outline-none bg-[#dcdcdc] hover:bg-[#f0f0f0] focus:bg-[#ffffff] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-[30px]" required="">
            </input>
            </div>

            <motion.div 
                className="bg-dark-1 hover:bg-dark-2 w-full z-10 font-medium rounded-lg text-sm text-center"
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.5
                    }
                }}
            >
                <button type="submit" className="text-[#ffffff] w-full h-full rounded-lg px-5 py-2.5">Create an account</button>
            </motion.div>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <a
                class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Sign in here</a>
            </p>
        </form>
        </div>
  </div>
  )
}