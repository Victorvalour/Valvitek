import {React, useState} from 'react'
import { motion, useCycle } from 'framer-motion'
import WebDevImg from '../images/web dev img.jpg'
import AppsImg from '../images/Apps Image.jpg'
import PersonProgrammingImg from '../images/Teaching Programming.jpg'
import WebsiteImage from '../images/Website Image.jpg'
import SpecialOffer from '../images/SpecialOffer.png'
import PersonCoding from '../images/Person Coding.jpg'
import RegisterCourseModal from './RegisterCourseModal'

const Sevices = () => {
  
    const [showModal, setShowModal] = useState(false)
    const popRegistrationForm = () => {


       !showModal ? setShowModal(true) : setShowModal(false)
    }
  return (
    <div className='mt-8'>
        <div className='relative mb-8 bg-black w-fit h-fit py-3 px-6 pr-14 text-white text-xl'>
         <p>Our Services</p>
         <motion.div className='absolute w-10 h-10 bg-white -right-5 top-[6px]'
         animate={{ rotate: 45 }}
         ></motion.div>
         </div>

         <div className='flex flex-col items-center px-6 gap-10 md:flex-row md:flex-wrap justify-center'>

         <div className='flex flex-col items-center bg-slate-100 rounded-xl overflow-hidden border-[1px] border-gray-200 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.5)] relative md:w-[400px] md:h-[600px]'>
        
      <img src={SpecialOffer} alt="" className='absolute w-36 right-0 -top-8 ' />
        <img src={PersonCoding} alt="" />
        <div className='flex flex-col px-2 pb-6 pt-6'>
        <p className='font-ibmPlexMono text-2xl font-semibold mb-5'>
         FULLSTACK WEB DEVELOPMENT COURSE
        </p>
        <p className=' mb-4'>Price:  <span className='font-semibold'>N10,000 </span> (Discount)</p>
        <div className='w-full h-1 bg-slate-300 mb-2'></div>
        <p className=' mb-4'>Learn how to build professional/world class websites using modern development tools like HTML/CSS/Javascript, React JS, Mongo DB, Express, Node JS, PHP etc</p>

        <button onClick={popRegistrationForm} className='self-center bg-blue-800 text-white text-xl w-fit h-fit py-2 px-3 rounded-lg'>
            Join the training
            </button>
        </div>
      
    </div>

    <RegisterCourseModal isVisible={showModal} onClose={() => {setShowModal(false) 
       } }/>   

        <div className='flex flex-col items-center bg-slate-100 rounded-xl overflow-hidden border-[1px] border-gray-200 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.5)] md:w-[400px] md:h-[600px] md:relative'>
        
      
            <img src={WebsiteImage} alt="" />
            <div className='flex flex-col px-2 pb-6 pt-6'>
            <p className='font-ibmPlexMono text-2xl font-semibold mb-5'>
             WEB DEVELOPMENT
            </p>
            <div className='w-full h-1 bg-slate-300 mb-2'></div>
            <p className=' mb-4'>We build professional and modern websites for clients and businesses all over the world.</p>
            <a href="https://wa.me/message/XWCQVZBLJVNMF1" className='self-center bg-blue-800 text-white text-xl w-fit h-fit py-2 px-3 rounded-lg md:absolute md:bottom-8'>
                Get a website
                </a>
            </div>
          
        </div>

        <div className='flex flex-col items-center bg-slate-100 rounded-xl overflow-hidden border-[1px] border-gray-200 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.5)] md:w-[400px] md:h-[600px] md:relative'>
        
      
            <img src={AppsImg} alt="" />
            <div className='flex flex-col px-2 pb-6 pt-6'>
            <p className='font-ibmPlexMono text-2xl font-semibold mb-5'>
             MOBILE APP DEVELOPMENT
            </p>
            <div className='w-full h-1 bg-slate-300 mb-2'></div>
            <p className=' mb-4'>Our developers are on standby, and ready to deliver to you premiem mobile application to your taste and satisfaction.</p>

            <button href="https://wa.me/message/XWCQVZBLJVNMF1" className='self-center bg-blue-800 text-white text-xl w-fit h-fit py-2 px-3 rounded-lg md:absolute md:bottom-8'>
                Build an App
                </button>
            </div>
          
        </div>

        <div className='flex flex-col items-center bg-slate-100 rounded-xl overflow-hidden border-[1px] border-gray-200 mb-10 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.5)] md:w-[400px] md:h-[600px]'>
        
      
        <img src={PersonProgrammingImg} alt="" />
        <div className='flex flex-col px-2 pb-6 pt-6'>
        <p className='font-ibmPlexMono text-2xl font-semibold mb-5'>
         DIGITAL COURSES
        </p>
        <div className='w-full h-1 bg-slate-300 mb-2'></div>
        <p className=' mb-4'>If you're looking to start a career in tech, Valvitek has got you covered. We offer high-end digital courses and one-on-one mentorship in various niche. <br />Including: <br />
        FullStack Web development, Mobile app development, Data analysis, Cyber security, Digital marketing etc.</p>
        <a href="https://wa.me/message/XWCQVZBLJVNMF1" className='self-center bg-blue-800 text-white text-xl w-fit h-fit py-2 px-3 rounded-lg'>
            Get Our Courses
            </a>
        </div>
      
    </div>
        </div>
    </div>
  )
}

export default Sevices