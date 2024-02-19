import React from 'react'


function BookingCard({data}) {


  return (
    <>
        <div className='Card shadow ms-5 mt-5 mb-5' style={{width:'500px',height:'450px'}}>
        <h3 className='text-center text-danger'>Booking Details</h3>
        <div className='mt-3  text-center' style={{marginTop:'20px',fontWeight:'bold'}}>
          <p>Name : {data.username}</p>
          <p>Email : {data.email}</p>
          <p>Phone no : {data.phoneno}</p>
          <p>Check In Date : {data.fromdate}</p>
          <p>Check Out Date : {data.todate}</p>
          <p>Total Days : {data.totaldays}</p>
          <p>Room Type : {data.roomtype}</p>
          <p>Total Rooms : {data.roomnos}</p>
          <p>Total Amount : {data.totalamount}</p>
        </div>
      </div>
    </>
  )
}

export default BookingCard