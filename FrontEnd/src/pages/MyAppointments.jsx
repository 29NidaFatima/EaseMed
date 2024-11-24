import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="p-4">
      <p className="pb-3 mt-1 font-medium text-zinc-700 border-b">My appointments</p>
      <div className="mt-4">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr_auto] gap-4 sm:flex sm:gap-6 py-4 border-b items-center"
            key={index}
          >
            {/* Doctor Image */}
            <div>
              <img
                className="w-32 h-32 bg-indigo-50 object-cover rounded-md"
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Doctor Information */}
            <div className="flex-1 text-sm text-zinc-600 space-y-2">
              <p className="font-semibold text-zinc-800">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="font-medium text-zinc-700">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p>
                <span className="font-semibold">Date & Time:</span> 24, Nov 2024 | 8:30 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button className="bg-indigo-500 text-white text-sm px-4 py-2 rounded hover:bg-indigo-600 hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
