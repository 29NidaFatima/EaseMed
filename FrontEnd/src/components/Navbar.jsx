import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="Logo" />
      <ul>
        <li>
          <NavLink >HOME</NavLink>
          <hr />
        </li>
        <li>
          <NavLink >ALL DOCTORS</NavLink>
          <hr />
        </li>
        <li>
          <NavLink >ABOUT</NavLink>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
