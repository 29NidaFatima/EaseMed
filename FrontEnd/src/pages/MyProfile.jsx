import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "NIDA FATIMA",
    image: assets?.profile_pic || '',
    email: '2529nida17@gmail.com',
    phone: '9026211687',
    address: {
      line1: "Street No.31 TUGHLAKABAD EXTENSION",
      line2: "NEW DELHI",
    },
    gender: 'Male',
    dob: '2000-01-20',
  });

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center gap-4">
        <img
          className="w-36 h-36 rounded-full object-cover border-2 border-gray-200"
          src={userData.image}
          alt="Profile"
        />
        {isEdit ? (
          <input
            className="bg-gray-50 border border-gray-300 text-3xl font-semibold text-center rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="text-3xl font-bold">{userData.name}</p>
        )}
      </div>
      <hr className="my-4" />
      <div className="text-left text-gray-700">
        <p className="font-semibold text-lg mb-2">Contact Information</p>
        <p className="text-sm">Email:</p>
        <p className="mb-2">{userData.email}</p>
        <p className="text-sm">Phone:</p>
        {isEdit ? (
          <input
            className="bg-gray-50 border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 mb-2"
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        ) : (
          <p className="mb-2">{userData.phone}</p>
        )}
        <p className="text-sm">Address:</p>
        {isEdit ? (
          <div className="flex flex-col gap-2 mb-4">
            <input
              className="bg-gray-50 border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
            />
            <input
              className="bg-gray-50 border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
            />
          </div>
        ) : (
          <p className="mb-4">
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        )}
      </div>
      <div>
        <p className="font-semibold text-lg mb-2">Basic Information</p>
        <p className="text-sm">Gender:</p>
        {isEdit ? (
          <select
            className="bg-gray-50 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300 mb-2"
            value={userData.gender}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, gender: e.target.value }))
            }
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p className="mb-2">{userData.gender}</p>
        )}
        <p className="text-sm">Birthday:</p>
        {isEdit ? (
          <input
            className="bg-gray-50 border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 mb-4"
            type="date"
            value={userData.dob}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, dob: e.target.value }))
            }
          />
        ) : (
          <p className="mb-4">{userData.dob}</p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          className={`px-6 py-2 rounded font-semibold ${
            isEdit
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? "Save Information" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
