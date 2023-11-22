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
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center z-10' id="wrapper" onClick={handleClose}
   >

        <motion.div className='fixed flex flex-col bg-white w-[75%] gap-10 h-full pt-10 pl-4'
         initial={{ x : -180 }}
         animate={{ x : 0 }}
         transition={{ type: "spring" }}
         exit={{ x : -180 }}
        >

<motion.button 
        animate={"open"}
        onClick= {() => onClose()}
        className="flex flex-col self-end space-y-1.5 mr-3 bg-blue-900 w-fit h-fit py-2 rounded-lg px-2 md:hidden"
        >
            <motion.span variants={{
                closed: { rotate:0, y: 0},
                open: { rotate:45, y:8},
            }} 
            className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
            <motion.span variants={{
                closed: { opacity: 1},
                open: { opacity: 0},
            }} 
            className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
            <motion.span  variants={{
                closed: { rotate: 0, y:0},
                open: { rotate: -45, y:-8},
            }} 
             className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
        </motion.button>

        <div className='w-[80%] flex flex-col'>


          
          
             

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