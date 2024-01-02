import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
//import { useNavigate } from 'react-router';

const JoinGroupModal = ({isVisible, onClose}) => {

  
   // const navigate = useNavigate();

    if (!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') {onClose()}
        }

       /* const handleSubmit = (e) => {
            e.preventDefault();
            window.location.href="https://flutterwave.com/pay/edpgyxh1eoqp"
            
        }
    */
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center z-10 justify-center' id="wrapper" onClick={handleClose}
   >

        <motion.div className='fixed flex flex-col bg-white w-[75%] gap-10  pt-4 px-4 mx-auto items-center rounded-lg'
         initial={{ y : -180 }}
         animate={{ y : 0 }}
         transition={{ type: "spring" }}
         exit={{ y : -180 }}
        >

<motion.button 
        animate={"open"}
        onClick= {() => onClose()}
        className="flex flex-col self-end space-y-1.5 mr-3 bg-blue-700 w-fit h-fit py-2 rounded-lg px-2 md:hidden"
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

        <div className='w-[80%] flex flex-col mb-5'>


          <div className=' self-center text-lg'><p>CONGRATULATIONS!!!</p></div>
          <motion.p className="p"
          initial={{ x : 70 }}
          animate={{ x : 110 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >&#129321;</motion.p>
          <p className='leading-4 mb-4'>Click on the button below to Join our Community and start your journey.</p>
          


<a  href='https://chat.whatsapp.com/KwPuq600B7TLGHIIHvonNP'
    className='bg-blue-700  h-fit py-2 text-white text-center text-xl active:bg-blue-500 active:text-2xl'><div className='flex justify-center items-center'><FontAwesomeIcon icon={faWhatsapp} /> <p className='ml-2'>Join Group</p> </div></a>







                
    </div>

    </motion.div>



          
            
          
        </div>
  )
  }

export default JoinGroupModal