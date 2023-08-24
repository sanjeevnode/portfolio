import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>

            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div>

                    </div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className=' sm:text-right text-4xl font-bold'>
                        <p>Hi , I'm Sanjeev singh , nice to meet you , please take a look around</p>
                    </div>
                    <div>
                        <p className=''>I am a dedicated web, and Android developer with a deep passion for coding and integrating programming concepts into everyday life. Additionally, I have a solid foundation in software development, including expertise in machine learning, and a strong drive to continuously learn and excel in my profession.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
