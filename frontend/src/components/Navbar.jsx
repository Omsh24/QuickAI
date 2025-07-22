import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Waypoints } from 'lucide-react';
import {useClerk, useUser, UserButton} from '@clerk/clerk-react'


const Navbar = () => {

    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();

  return (
    <div className='fixed z-5 w-full backdrop:blur flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer'>
        {/* <img src={assets.logo} className='w-32 sm:w-44 cursor-pointer' alt="logo" onClick={() => navigate('/')}/> */}
        {/* <svg width="240" height="60" xmlns="http://www.w3.org/2000/svg">
          <Waypoints className=' ' />
          
        </svg> */}

        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="60" viewBox="0 0 240 60" fill="none">
          {/* <!-- Waypoints Icon (left, centered vertically) --> */}
          <g stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="30" cy="15" r="6"/>
            <circle cx="15" cy="30" r="6"/>
            <circle cx="45" cy="30" r="6"/>
            <circle cx="30" cy="45" r="6"/>
            <path d="M24 17L10 31"/>
            <path d="M18 30h24"/>
            <path d="M36 43l14-14"/>
          </g>
          {/* <!-- Brand Text (right of icon) --> */}
          <text x="70" y="42" font-size="32" font-family="'Varela Round', Arial, sans-serif" fill="#4F46E5">
            सर्व.AI
          </text>
        </svg>


        

        {
            user ? <UserButton/> : 
            (
                <button onClick={openSignIn} className='flex items-center rounded-full gap-2 text-sm cursor-pointer
                 bg-primary text-white px-10 py-2.5'>
                    Get Started <ArrowRight className='w-4 h-4'/></button>
            )
        }

        </div>
  )
}

export default Navbar