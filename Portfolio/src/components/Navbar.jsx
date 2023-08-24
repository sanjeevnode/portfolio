import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';
import resumepdf from '../assets/resume.pdf'


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
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamberger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex justify-center items-center flex-col"}>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* socials */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px]
                    hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href="https://www.linkedin.com/in/sanjeev-singh-242122253" className='flex justify-between items-center w-full text-gray-300'>
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px]
                    hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href="https://github.com/sanjeevnode" className='flex justify-between items-center w-full text-gray-300'>
              Github
              <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px]
                    hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a href="https://me.sanjeevks@gmail.com" className='flex justify-between items-center w-full text-gray-300'>
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px]
                    hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a href={resumepdf} className='flex justify-between items-center w-full text-gray-300'
              download="Sanjeev's Resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
