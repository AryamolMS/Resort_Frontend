import React from 'react'

function AdminCard({booking}) {
  return (
    <>
    <div>
        <div className='Card shadow ms-5 mt-5 mb-5' style={{width:'500px',height:'450px',marginLeft:'400px'}}>
        <h2 className='text-center text-success '>{booking.username} Bookings</h2> 
            <div className='text-center mt-3 ' style={{fontWeight:'bold'}}>    
            <p>Name : {booking.username}</p>
            <p>Email : {booking.email}</p>
            <p>Phone no : {booking.phoneno}</p>
            <p>Check In Date : {booking.fromdate}</p>
            <p>Check Out Date : {booking.todate}</p>
            <p>Total Days : {booking.totaldays}</p>
            <p>Room Type : {booking.roomtype}</p>
            <p>Total Rooms : {booking.roomnos}</p>
            <p>Total Amount : {booking.totalamount}</p>
            </div>       
        </div>
    </div>
    </>
  )
}

export default AdminCard