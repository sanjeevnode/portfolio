import React, { useState } from 'react'
import { FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


import Logo from '../assets/logo.png'
const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);


    return (
        <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="" style={{ width: '60px' }} />
            </div>
            {/* menu */}

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            {/* hamberger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex justify-center items-center flex-col"}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skill</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* socials */}
            <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px]
                    hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin 
                        <FaLinkedin size={30}/> 
                        </a>
                    </li>

                    <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px]
                    hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Github 
                        <FaGithub size={30}/> 
                        </a>
                    </li>

                    <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px]
                    hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Email 
                        <HiOutlineMail size={30}/> 
                        </a>
                    </li>

                    <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px]
                    hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Resume 
                        <BsFillPersonLinesFill size={30}/> 
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
