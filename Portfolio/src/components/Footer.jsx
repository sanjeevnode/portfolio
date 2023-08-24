import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import resumepdf from '../assets/resume.pdf'

const Footer = () => {
    return (
        <div className='lg:hidden w-full h-[70px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300'>

            <ul className='max-w-[600px] p-4 flex justify-between items-center'>
                <li className=''>
                    <a href="https://www.linkedin.com/in/sanjeev-singh-242122253" className=''>
                        <FaLinkedin size={30} />
                    </a>
                </li>

                <li className=''>
                    <a href="https://github.com/sanjeevnode" className=''>
                        <FaGithub size={30} />
                    </a>
                </li>

                <li className=''>
                    <a href="https://me.sanjeevks@gmail.com" className=''>
                        <HiOutlineMail size={30} />
                    </a>
                </li>

                <li className=''>
                    <a href={resumepdf} className=''
                        download="Sanjeev's Resume"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsFillPersonLinesFill size={30} />
                    </a>
                </li>

            </ul>


        </div>
    )
}

export default Footer
