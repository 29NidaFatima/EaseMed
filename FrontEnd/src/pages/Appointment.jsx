
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { doctors as doctorsData } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext); 
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => { 
    const docInfo = doctors.find((doc) => doc._id === docId); 
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    <div>
{/* --------Doctprs Details-------- */}
<div>
  <div>
    <img src={docInfo.img} alt="" />
  </div>
</div>
    </div>
  );
};

export default Appointment;
