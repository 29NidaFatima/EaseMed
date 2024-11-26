import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_');
    return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2];
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } });

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } });

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="p-4">
      <p className="pb-3 mt-1 font-medium text-zinc-700 border-b">My appointments</p>
      <div className="mt-4">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div
              className="grid grid-cols-[1fr_2fr_auto] gap-4 sm:flex sm:gap-6 py-4 border-b items-center"
              key={appointment._id}
            >
              {/* Doctor Image */}
              <div>
                <img
                  className="w-32 h-32 bg-indigo-50 object-cover rounded-md"
                  src={appointment.docData.image}
                  alt={appointment.docData.name}
                />
              </div>

              {/* Doctor Information */}
              <div className="flex-1 text-sm text-zinc-600 space-y-2">
                <p className="font-semibold text-zinc-800">{appointment.docData.name}</p>
                <p>{appointment.docData.speciality}</p>
                <p className="font-medium text-zinc-700">Address:</p>
                <p>{appointment.docData.address.line1}</p>
                <p>{appointment.docData.address.line2}</p>
                <p>
                  <span className="font-semibold">Date & Time:</span> {slotDateFormat(appointment.slotDate)} | {appointment.slotTime}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 justify-end">
                {!appointment.cancelled && (
                  <>
                    <button className="text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
                      Pay Online
                    </button>
                    <button
                      className="text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300"
                      onClick={() => cancelAppointment(appointment._id)}
                    >
                      Cancel Appointment
                    </button>
                  </>
                )}
                {appointment.cancelled && (
                  <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
                    Appointment Cancelled
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
