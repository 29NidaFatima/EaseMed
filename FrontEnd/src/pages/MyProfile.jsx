import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const[userData,setUserData]=useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:'richardjameswap@gmail.com',
    phone:'+1 123 456 7890',
    address:{
      line1:"57th cross,richmod",
      line2:" Circle,Church Road,London"
    },
    gender:'Male',
    dob:'2000-01-20'
  })
  const [isEdit,setIsEdit]=useState(false)
  return (
    <div>
      <img src={userData.image}  />
{
  isEdit?
  <input type="text"  value={userData.name} onChange={e=>setUserData(pre=>({...pre,name:e.target.value}))}/>
  :<p>{userData.name}</p>
}
    </div>
  )
}

export default MyProfile
