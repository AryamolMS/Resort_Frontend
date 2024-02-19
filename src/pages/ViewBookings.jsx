import React, { useEffect, useState } from 'react'
import BookingCard from '../components/BookingCard'
import { userbookingsApi } from '../services/allAPI'
import { useContext } from 'react';
import { userbookingdetailsContext } from '../context/Contextshare';
import { Link } from 'react-router-dom';

function ViewBookings() {

  const {bookingdetails,setBookingdetails} = useContext(userbookingdetailsContext)

  const [userbooking,setuserbooking] = useState([])

  const getuserbookings = async()=>{
    
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
   
    const result = await userbookingsApi(reqHeader)
    console.log(result);
    setuserbooking(result.data)
  }
}
  useEffect(()=>{
    getuserbookings()
  },[bookingdetails])

  return (
    <>
    <h1 className='text-center text-danger  mt-4'><Link to={'/homelogin'}><i class="fa-solid fa-arrow-left text-dark"></i></Link> USER BOOKINGS</h1>
     {userbooking?.length>0?
     userbooking.map((item)=>(<BookingCard data={item}/>))
    :
    <img src="https://img.freepik.com/free-vector/happy-tourists-choosing-hotel-booking-room-online-flat-illustration_74855-10811.jpg" alt="no image" style={{marginLeft:'340px'}} />
      
  }
    </>
  )
}

export default ViewBookings