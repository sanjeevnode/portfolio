import React from 'react'
import { cssLogo, firebaseLogo, githubLogo, htmlLogo, javascriptLogo, mongoLogo, nodeLogo, pythonLogo, reactLogo, tailwindLogo } from '../assets'

const Skill = () => {
    return (
        <div name='skills' className='bg-[#0a192f]  text-gray-300  w-full h-screen'>
            {/* contaier */}
            <div className=' max-w-[1000px] mx-auto p-4 flex flex-col  justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>These are the technologies that i have work with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={htmlLogo} alt="" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={cssLogo} alt="" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactLogo} alt="" />
                        <p className='my-4'>React Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={javascriptLogo} alt="" />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={nodeLogo} alt="" />
                        <p className='my-4'>Node Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={githubLogo} alt="" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={firebaseLogo} alt="" />
                        <p className='my-4'>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwindLogo} alt="" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={pythonLogo} alt="" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongoLogo} alt="" />
                        <p className='my-4'>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
