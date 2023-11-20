import React from 'react'
import { useCycle, motion } from 'framer-motion'
import ValvitelLogo from '../assets/ValvitekLogo.svg'

const Navbar = () => {
    const [mobileNav, toggleMobileNav] = useCycle(false, true)
  return (
    
    <div>
                <div className='flex justify-between items-center w-full bg-slate-200  h-20'>
        <img src={ValvitelLogo} alt="" className='w-32'/>
        <motion.button 
        animate={mobileNav ? "open" : "closed"}
        onClick= {() => toggleMobileNav()}
        className="flex flex-col space-y-1.5 mr-3"
        >
            <motion.span variants={{
                closed: { rotate:0, y: 0},
                open: { rotate:45, y:10},
            }} 
            className="w-12 h-1 bg-blue-700  block rounded-sm"></motion.span>
            <motion.span variants={{
                closed: { opacity: 1},
                open: { opacity: 0},
            }} 
            className="w-12 h-1 bg-blue-700  block rounded-sm"></motion.span>
            <motion.span  variants={{
                closed: { rotate: 0, y:0},
                open: { rotate: -45, y:-10},
            }} 
             className="w-12 h-1 bg-blue-700  block rounded-sm"></motion.span>
        </motion.button>
        </div>
    </div>
  )
}

export default Navbar