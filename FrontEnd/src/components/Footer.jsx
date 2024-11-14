import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* -------Left Section------ */}
        <div>
<img className='mb-5 w-40' src= {assets.logo} alt="" />
<p className='w-full md:w-2/3 text-gray-600 leading-6'>Schedule appointments with trusted doctors at your convenience. Access a wide range of medical specialties and find the best care for you and your family. Book today, stay healthy tomorrow.</p>
        </div>
       {/* ----Center Section---- */}
       <div>
<p className='text-xl font-medium mb-5'>COMPANY</p>
<ul className='flex flex-col gap-2 text-gray-600'>
<li>Home</li>
<li>About us</li>
<li>Contact us</li>
<li>Privacy policy</li>
</ul>
       </div>
       {/* -----Right Section----- */}
       <div>
<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
<ul  className='flex flex-col gap-2 text-gray-600'>
    <li>+91 9026211687</li>
    <li>2529nida17@gmail.com</li>
</ul>
       </div>
      </div>
      <div>
        {/* -------Copyright Text------ */}
        <p className='py-5 text-sm text-center'>Copyright 2024 @Nida.dev- All Right Reserved.</p>
        <hr />
      </div>
    </div>
  )
}

export default Footer