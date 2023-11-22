import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
//import { useNavigate } from 'react-router';

const NavModal = ({isVisible, onClose}) => {

      
   // const navigate = useNavigate();

    if (!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') {onClose()}
        }
    
  return (
    <div className='fixed top-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center ' id="wrapper" onClick={handleClose}
   >

        <motion.div className='fixed bg-white w-[75%] h-full pt-10 pl-4'
         initial={{ x : -180 }}
         animate={{ x : 0 }}
         transition={{ type: "spring" }}
         exit={{ x : -180 }}
        >
        <div className='w-[80%] flex flex-col'>

            
         {  /* <button onClick={() => onClose()} className='text-red-500 bg-white text-2xl place-self-end w-8 rounded-lg font-semibold'>X</button> */}
           
             

                <div className='flex items-center h-10 mb-5 border-b-[1px] border-cyan-600'>
                    <p className=''>Home</p>
                </div>


                <div className='flex items-center h-10 mb-5 border-b-[1px] border-cyan-600'>
                  <p className=''>About us</p>
                </div>

                <div className='flex items-center h-10 mb-5 border-b-[1px] border-cyan-600'>
                    <p>Our Services</p> 
                </div>

                <div className='flex items-center h-10 mb-5 border-b-[1px] border-cyan-600'>
                    <p>Tech courses</p> 
                </div>

                <div className='flex items-center h-10 mb-5 border-b-[1px] border-cyan-600'>
                    <p>Contact Us</p> 
                </div>
                
    </div>

    </motion.div>



          
            
          
        </div>
  )
  }

export default NavModal