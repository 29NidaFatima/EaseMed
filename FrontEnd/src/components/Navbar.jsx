import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [Token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        {['/', '/doctors', '/about', '/contact'].map((path, index) => {
          const labels = ['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'];
          return (
            <li key={path} className='py-1'>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'text-black'
                }
              >
                {labels[index]}
              </NavLink>
              <hr
                className={`border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto ${
                  location.pathname === path ? 'block' : 'hidden'
                }`}
              />
            </li>
          );
        })}
      </ul>

      {/* User Actions */}
      <div className='flex items-center gap-4'>
        {Token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown Icon" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate('my-profile')}
                  className='hover:text-black cursor-pointer'
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('my-appointments')}
                  className='hover:text-black cursor-pointer'
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className='hover:text-black cursor-pointer'
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-8 py-2 rounded-full font-light hidden md:block'
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className='w-6 md:hidden'
          src={assets.menu_icon}
          alt="Menu Icon"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? 'fixed inset-0' : 'h-0 w-0'
        } md:hidden z-20 overflow-hidden bg-white transition-all duration-300`}
      >
        <div className='flex items-center justify-between p-4 border-b'>
          <img className='w-28' src={assets.logo} alt="Mobile Logo" />
          <img
            onClick={() => setShowMenu(false)}
            className='w-6 cursor-pointer'
            src={assets.cross_icon}
            alt="Close Icon"
          />
        </div>
        <ul className='flex flex-col items-center gap-4 mt-6'>
          {['/', '/doctors', '/about', '/contact'].map((path, index) => {
            const labels = ['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-primary font-semibold' : 'text-black'
                  }
                >
                  {labels[index]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
