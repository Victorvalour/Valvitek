import React from 'react'
import BackgroundImage from '../images/BackgroundImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {

  return (
    <section>
  

    <div className="relative bg-gradient-to-tr from-blue-900 to-green-900 h-[450px] w-full">

        <img src={BackgroundImage} alt="" className='w-full h-full object-cover absolute mix-blend-overlay opacity-80'/>
   
        <div className=' text-white pt-8 pl-3'>
            <p className='text-5xl font-bold'>Technological Solutions</p>
            <p className='text-3xl pt-5'>Build, Learn, Scale up...</p>

            <div className='absolute mt-16 flex flex-col w-full'>
                <a href="https://wa.me/message/XWCQVZBLJVNMF1" className='mb-10 p-0 bg-blue-700 h-fit w-fit text-center py-2 px-4 rounded-3xl text-lg hover:bg-blue-400 active:scale-125'>
                Explore our Courses <FontAwesomeIcon icon={faArrowRightLong} />
                </a>

               <a href="https://wa.me/message/XWCQVZBLJVNMF1" className='self-end mr-5 bg-green-700  h-fit w-fit px-4 py-2 rounded-3xl text-lg hover:bg-green-400 active:scale-125'>Get a Business website<FontAwesomeIcon icon={faArrowRightLong} />
                </a> 
            </div>
            </div>
      
    </div>
    </section>
  )
}

export default Hero