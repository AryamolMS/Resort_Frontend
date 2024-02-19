import React from 'react'
import { Link } from 'react-router-dom'
import { baseurl } from '../services/baseurl'

function Card({display}) {
  
  return (
    <>
          <div className="Card shadow rounded me-5 mt-5 ms-4" style={{height:'500px',width:'300px'}}>
              <img src={display?`${baseurl}/uploadimages/${display.roomImage}`:"https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt=""style={{ width: '250px', height: '200px' }}className='Card shadow imgroom mt-5 ms-3' />
              <h3 className='text-center mt-3'>{display.Name}</h3>
              <p className='me-2 text-center'>Services : {display.Services}</p>
              <p className='me-2 text-center'>Count: {display.Count}</p>
              <p className='me-2 text-center'>Type : {display.Type}</p>
              <p className='text-center mt-1'> Amount :<span style={{ fontWeight: 'bold' }}> ₹{display.Amount} </span></p>

          </div>
    </>
  )
}

export default Card

