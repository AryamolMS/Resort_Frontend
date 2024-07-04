import React, { useEffect, useState } from 'react'
import './style/bookings.css'
import { Col, Row } from 'react-bootstrap';
import { bookingsApi, displayuserRoomsnApi } from '../services/allAPI';
import { useContext } from 'react';
import { userbookingdetailsContext } from '../context/Contextshare';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Payment from './Payment';

function Bookings() {

  const {bookingdetails,setBookingdetails} = useContext(userbookingdetailsContext)
  const navigate = useNavigate()

  const [details, setdetails] = useState({
    "username": "",
    "email": "",
    "phoneno": ""
  })
  console.log(details);

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numOfDays, setNumOfDays] = useState(0);

  const [displayRoomes, setDisplayrooms] = useState([])
  const [quantity, setQuantity] = useState({
    quantity: 0,
    amount: 0
  })

  const [grandtotal, setgrandtotal] = useState(0)


  const handleCheckInChange = (event) => {
    setCheckInDate(event.target.value);
    console.log(event.target.value);
  };

  const handleCheckOutChange = (event) => {
    setCheckOutDate(event.target.value);
    console.log(event.target.value);
  };

  const calculateNumOfDays = () => {
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    // Calculate the difference in milliseconds
    const dateDifference = endDate - startDate;

    // Convert milliseconds to days
    const days = Math.ceil(dateDifference / (1000 * 60 * 60 * 24));

    setNumOfDays(days);
  };

 

  console.log(grandtotal);

  const getRooms = async () => {
    const token = sessionStorage.getItem("token")
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const result = await displayuserRoomsnApi(header)
    setDisplayrooms(result.data)
  }

  console.log(displayRoomes);

  const [selectedRooms, setselectedrooms] = useState(null)

  const handleroomChange = (e) => {
    const selected = displayRoomes.find(item => item.Name === e.target.value);
    setselectedrooms(selected);
    
  }
  console.log(selectedRooms);

 

  const handleBookings = async (e) => {
    e.preventDefault()
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    if (token) {
      const result = await bookingsApi({roomId:selectedRooms,username:details.username,email:details.email,phoneno:details.phoneno,fromdate:checkInDate,todate:checkOutDate,totaldays:numOfDays,roomtype:selectedRooms.Type,roomnos:quantity.quantity,Amount:selectedRooms.Amount,totalamount:grandtotal}, reqHeader)
      console.log(result);
      
      setBookingdetails(result.data)

    }
  }


  useEffect(() => {
    getRooms()
  }, [])

  useEffect(() => {
    if (selectedRooms && quantity.quantity) {
      const grand = (selectedRooms.Amount * quantity.quantity * numOfDays)
      setgrandtotal(grand)
    }
  }, [selectedRooms, quantity.quantity, numOfDays])

  return (
    <>

      <div className='body'>
        <h2 className='text-center' style={{ color: 'white' }}>Hotel Room Booking</h2>

        <Row>

          <div className="booking-form-container mt-2">

            <form style={{ width: '600px' }}>
              <Row>

                <Col md={6}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input value={details.username} onChange={(e) => setdetails({ ...details, username: e.target.value })} type="text" name="name" required />
                  </div>

                  <div className="form-group">
                    <label>Email:</label>
                    <input value={details.email} onChange={(e) => setdetails({ ...details, email: e.target.value })} type="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <input value={details.phoneno} onChange={(e) => setdetails({ ...details, phoneno: e.target.value })} type="tel" name="phone" required />
                  </div>
                  <div className="form-group">
                    <label>Check-in Date:</label>
                    <input type="date" name='checkinday' required value={checkInDate} onChange={(e)=>handleCheckInChange(e)} />

                  </div>
                  <div className="form-group">
                    <label>Check-Out Date</label>
                    <input type="date" name='checkoutday' required value={checkOutDate} onChange={(e)=>handleCheckOutChange(e)} />
                  </div>
                </Col>
                <Col md={6}>

                  <div className='mt-4'>
                    <button className='btn btn-primay' type="button" onClick={calculateNumOfDays}>
                      Calculate Number of Days
                    </button>
                    <p className='mt-3'>Number of days between check-in and check-out: <h3>{numOfDays}</h3></p>
                  </div>
                  <div className="form-group">
                    <label>Room Type:</label>
                    <select onChange={(e) => handleroomChange(e)}>
                      <option value="">Select an option</option>
                      {displayRoomes?.length > 0 ?
                        displayRoomes.map((rooms) => (<option key={rooms.Name} value={rooms.Name}>{rooms.Name}</option>))
                        : <option value="option1">No rooms</option>}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Number of Rooms:</label>
                    <input value={quantity.quantity} onChange={(e) => setQuantity({ ...quantity, quantity: e.target.value })}
                      type='number'
                      name="numberOfRooms"
                      min="1"
                    />
                  </div>
                  <div className="form-group">
                    <label>Total Amount</label>
                    {selectedRooms && <button style={{ width: '300px', fontSize: '20px', fontWeight: 'bold', backgroundColor: 'white' }} className='btn mt-2 mb-1'>{selectedRooms.Amount * quantity.quantity * numOfDays}</button>}
                  </div>
                </Col>
{/*                 <button onClick={handleBookings} className='btn btn-success'  type="submit">Book Room</button>

 */}              
    <Payment grand={grandtotal} onClick={handleBookings}/>
 </Row>
            </form>
          </div>
        </Row>
      </div>
      <div>
      </div>

    </>
  )
}

export default Bookings


