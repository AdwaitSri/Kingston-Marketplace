import React from "react";

export default function Signup() {
    const [formData, setFormData] = React.useState(
        {
            name: '',
            username: '',
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
    class="w-full bg-orange-1 rounded-lg shadow dark:border md:mt-[10dvh] sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-[10dvh]">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
            account
        </h1>
        <form class="space-y-4 md:space-y-6" method="POST">
            <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
            <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} class="outline-none bg-[#dcdcdc] hover:bg-[#f0f0f0] focus:bg-[#ffffff] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required="">
            </input>
            </div>
            <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" name="username" id="username" onChange={handleChange} value={formData.username} class="outline-none bg-[#dcdcdc] hover:bg-[#f0f0f0] focus:bg-[#ffffff] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john_doe24" required="">
            </input>
            </div>

            <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} placeholder="••••••••••" class="outline-none bg-[#dcdcdc] hover:bg-[#f0f0f0] focus:bg-[#ffffff] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </input>
            </div>

            <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <a
                class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Sign in here</a>
            </p>
        </form>
        </div>
  </div>
  )
}