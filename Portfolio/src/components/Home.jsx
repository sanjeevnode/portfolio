import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div name='home' className='bg-[#0a192f] w-full h-screen'>

            {/* conntainer */}

            <div className='max-w-[900px] mx-auto px-4 flex flex-col justify-center  h-full'>

                <p className='text-pink-600'>Hi my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sanjeev Kumar singh</h1>
                <h2 className='md:flex text-3xl sm:text-5xl font-bold text-[#8892b0]'>

                    I'm a <span className='text-pink-600 md:mx-2'>
                        <Typewriter
                            options={{
                                strings: [
                                    'Full Stack Developer',
                                    'Android App Developer',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 40,
                            }}
                        />
                    </span>
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[800px] '>
                    I'm a full-stack developer specializing in building (and occasionaly designing) exceptional digital experiences.
                </p>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'><Link to='projects' smooth={true} duration={500}>
                        View Work
                    </Link>
                        <span className='md:group-hover:rotate-90 duration-300'>
                            <HiArrowRight className='ml-2' />
                        </span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Home
