import React from 'react'
import {project1,project2,project3} from "../assets"

const Projects = () => {
  return (
    <div name="projects" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
            <p className='py-6'>Check out some of my recent projects</p>
        </div>
{/* container */}
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto' >
           {/* grid item */}
            <div style={{backgroundImage:`url(${project1})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        My Blog 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${project2})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        My Blog 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${project3})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        My Blog 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Projects
