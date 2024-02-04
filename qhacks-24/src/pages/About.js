import React from 'react';
import HomeNavbar from '../components/HomeNavbar'; // assuming the Navbar component is in the same directory

const About = () => {
  return (
    <>
      <HomeNavbar />
      <div className="flex flex-col items-center justify-center py-12">
        <div className="flex justify-around items-center w-full max-w-6xl px-4">
          <div className="flex flex-col items-center px-10">
            <div className='w-[400px] h-[400px]'>
                <img
                src="/images/kevin.jpg"
                alt="Profile"
                className="object-cover rounded-full bg-gray-300 mb-4"
                />
            </div>
            <h2 className="text-4xl font-semibold py-6">Kevin Yao</h2>
            <p className="text-2xl text-gray-800 pb-2">2nd Year Computing Student</p>
            <p className="text-2xl text-gray-800 pb-2">Designer/Front End</p>
          </div>
          
          <div className="flex flex-col items-center px-10">
            <div className='w-[400px] h-[400px]'>
                <img
                src="/images/james.jpg"
                alt="Profile"
                className="object-cover rounded-full bg-gray-300 mb-4"
                />
            </div>
            <h2 className="text-4xl font-semibold py-6">James Song</h2>
            <p className="text-2xl text-gray-800 pb-2">2nd Year Computing Student</p>
            <p className="text-2xl text-gray-800 pb-2">Front End/Back End</p>
          </div>

          <div className="flex flex-col items-center px-10">
            <div className='w-[400px] h-[400px]'>
                <img
                src="/images/adwait.jpg"
                alt="Profile"
                className="object-cover rounded-full bg-gray-300 mb-4"
                />
            </div>
            <h2 className="text-4xl font-semibold py-6">Adwait Srivastava</h2>
            <p className="text-2xl text-gray-800 pb-2">2nd Year Computing Student</p>
            <p className="text-2xl text-gray-800 pb-2">Back End/Database</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;