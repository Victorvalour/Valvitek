import React from 'react'
import BackgroundImage from '../images/BackgroundImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Hero = () => {

  return (
    <section>
  

    <div className="relative bg-gradient-to-tr from-blue-900 to-green-900 h-[450px] w-full  lg:flex lg:space-x-14">

        <img src={BackgroundImage} alt="" className='w-full h-full object-cover absolute mix-blend-overlay opacity-50'/>
   
        <div className=' text-white pt-8 pl-3'>
            <p className='text-5xl font-bold lg:text-7xl '>Technological <br className='hidden lg:block' />   Solutions</p>
            <p className='text-3xl pt-5'>Build, Learn, Scale up...</p>
      </div>
      <div className='absulute text-white'>
            <div className='absolute mt-16 flex flex-col w-full justify-center'>
                <Link to="/course-catalogue" className='mb-10 md:ml-10 p-0 bg-blue-700 h-fit w-fit text-center py-2 px-4 rounded-3xl text-lg hover:bg-blue-400 active:scale-125 lg:w-96'>
                Explore our Courses <FontAwesomeIcon icon={faArrowRightLong} />
                </Link>

               <a href="https://wa.me/message/XWCQVZBLJVNMF1" className='self-end mr-5 bg-green-700  h-fit w-fit px-4 py-2 rounded-3xl text-center text-lg hover:bg-green-400 active:scale-125 lg:self-start lg:w-96'>Explore our Services <FontAwesomeIcon icon={faArrowRightLong} />
                </a> 
            </div>
            </div>
      
    </div>
    </section>
  )
}

export default Hero