import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate= useNavigate();
  const [showMenu,setshowMenu]= useState(false);
  const[Token,setToken]=useState(true)
  return (
    <div className='flex items-center justify-between text -sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer'  src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li className='py-1'>
          <NavLink to='/' >HOME</NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </li>
        <li className='py-1'>
          <NavLink to='/doctors' >ALL DOCTORS</NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </li>
        <li className='py-1'>
          <NavLink to='/about'>ABOUT</NavLink>
          <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </li>
        <li className='py-1'>
          <NavLink to='/contact' >CONTACT</NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </li>
      </ul>
      <div className='flex items-center gap-4' >
      {
        Token
        ?<div className='flex items-center gap-2 cursor-pointer group relative'>
           <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
        <img  className='w-2.5'src={assets.dropdown_icon} alt="" />
        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
        <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
            <p onClick={()=>navigate('my-profile')}className='hover:text-black cursor-pointer' >My Profile</p>
            <p onClick={()=>navigate('my-appointments')}className='hover:text-black cursor-pointer'> My Appointments</p>
            <p  onClick={()=>setToken(false)}className='hover:text-black cursor-pointer'>Logout</p>
          </div>
        </div>
        </div>
        :<button  onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-2 rounded-full font-light hidden md:block'>Create Account</button>
      }
        </div>
    </div>
  );
}

export default Navbar;
