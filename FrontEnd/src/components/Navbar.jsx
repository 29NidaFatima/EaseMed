import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="Logo" />
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/doctors">ALL DOCTORS</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
