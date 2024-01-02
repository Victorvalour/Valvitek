import React from 'react'
import ValvitekLogo from '../assets/ValvitekLogo.svg'
import BackgroundImg from '../images/Person Coding.jpg'
import Select from 'react-dropdown-select'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import JoinGroupModal from '../components/JoinGroupModal'

const Register = () => {
    const [showModal, setShowModal] = useState(false)
    const popLinkModal = () => {


       !showModal ? setShowModal(true) : setShowModal(false)
    }
  
    const [phoneNumber, setPhoneNumber] = useState('');
      const [type, setAccountType] = useState('');
      const [name, setFullName] = useState('');
    
  

      const courses =  [
        {label: 'Web Development', value: 1},
        {label: 'Data Analysis', value: 2},
        {label: 'Mobile App Development', value: 3},
        {label: 'Video Editing/Special Effects', value: 4},
        {label: 'Digital Marketing', value: 5},
        
       
      ]
      const navigate = useNavigate()
  

    
      const handleSubmit = (e) => {
          e.preventDefault();

          toast.success('Registration Successful', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

            popLinkModal()
         /* const fullName = firstName + ' ' + lastName;
          setFullName(fullName);

  
        console.log(userData)*/
      
        }
          
  
  
    return (
      <div className='py-2 px-2 md:mx-[15%] xl:mx-[25%]'>

        <div className="relative flex items-center bg-gradient-to-tr from-blue-900 to-teal-500 h-36 w-full lg:flex ">

<img src={BackgroundImg} alt="" className='w-full h-full object-cover absolute mix-blend-overlay opacity-40'/>
       <div className='bg-white w-fit h-fit mx-auto rounded-2xl'> <img src={ValvitekLogo} alt="" className='w-28 mx-auto'/>
       </div>
        </div>
       <p className='text-2xl mt-4 ml-6 font-semibold text-center'> Welcome &#127881;</p>
       <p className='text-lg mb-4 ml-6'>
        Congratulations on making your first step on your <span className='font-semibold'>Tech</span> journey.
       </p>
  
       <form 
                onSubmit={handleSubmit}
              className='w-[90%] rounded-lg bg-teal-100 mx-auto'>
                  <p className='text-3xl font-semibold text-center'>Basic Info</p>
                  <p className='text-lg text-center mb-6'>Fill in your details below</p>
  
              <div className='flex flex-col  w-[90%] mx-auto'>            
                 
  
              <label htmlFor="">First name</label>
                  <input type="text"
                   placeholder='First Name'
                  
                  className='pl-2 h-12 rounded-md text-lg my-2' />
                 
  
                    <label htmlFor="">Last Name</label>
                  <input type="text" 
                  placeholder='Last Name'
                  className='pl-2 h-12 rounded-md text-lg my-2' />
  
                    <label htmlFor="">Phone number (Whatsapp) </label>
                      <input type="text"
                       placeholder='Phone Number'
                       value={phoneNumber}
                       onChange={e => setPhoneNumber(e.target.value)}
                      className='pl-2 h-12 rounded-md text-lg mb-2' />
                     
  
                    <label htmlFor="">Email address</label>
                  <input type="email" 
                  placeholder='Email Address'
                  onChange={e => setEmailAddress(e.target.value)}
                  className='pl-2 h-12 rounded-md text-lg mb-2' />
                    
  
                    <label htmlFor="">Select your Course</label>

                    <Select 
                    className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                    name='Account Type'
                  
                    options={courses}>
                    </Select>
                
  
  
                  <button 
                  className='pl-2 h-12 w-64 bg-orange-500 rounded-2xl px-6 text-xl font-bold mx-auto my-4'
                  type='submit'>Submit</button>
  
                  </div>
  
                 
            
              </form>
              <ToastContainer />
              <JoinGroupModal isVisible={showModal} onClose={() => {setShowModal(false) 
       } }/> 
      </div>
  )
}

export default Register