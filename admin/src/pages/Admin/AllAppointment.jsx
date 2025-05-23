import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'

const AllAppointment = () => {


const  {aToken, appointments,getAllAppointments} = useContext(AdminContext)

useEffect(()=>{
  if (aToken) {
    getAllAppointments()
    
  }

},[aToken])

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium '>All Appointments</p>
      <div className='border-white border rounded text-sm max-h-[80vh] min-h-[60vh] overscroll-y-scroll'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
          
        </div>
        {appointments.map((item,index)=>(
          <div key={index}>
            <p>{index}</p>
            <div>
              <img src={item.userData.image} alt="" /> <p>{item.userData.name}</p>
            </div>            
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointment
