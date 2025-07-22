import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar'
import { useUser, SignIn } from '@clerk/clerk-react';

const Layout = () => {

  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const {user} = useUser();


  return user ?  (
    <div className='flex flex-col h-screen items-start justify-start'>

      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
        {/* <img src={assets.logo} alt="logo" onClick={() => navigate('/')} className='cursor-pointer w-32 sm:w-44'/> */}
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
          sidebar ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden '/>
          : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden '/>
        }
      </nav>

      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}  />
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>

      </div>

      
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout