import React from 'react'
import { motion } from 'framer-motion'

const Sevices = () => {
  return (
    <div className='mt-8'>
        <div className='relative bg-black w-fit h-fit py-3 px-6 pr-14 text-white text-xl'>
         <p>Our Services</p>
         <motion.div className='absolute w-10 h-10 bg-white -right-5 top-[6px]'
         animate={{ rotate: 45 }}
         ></motion.div>
         </div>

         <div className='flex flex-col items-center px-8'>
        <div className='flex flex-col items-center'>
            <p className='font-gothic'>
                Web Development
            </p>
            <img src="" alt="" />
            <p>We build professional and modern websites for clients and businesses all over the world.</p>
        </div>

        <div className=''>
            <p className='font-gothic'>
                Web Development
            </p>
        </div>

        <div className=''>
            <p className='font-gothic'>
                Web Development
            </p>
        </div>

        </div>
    </div>
  )
}

export default Sevices