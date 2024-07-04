import React, { useEffect,useState } from 'react'
import AdminCard from '../components/AdminCard'
import { allbookingsApi } from '../services/allAPI'
import { Link } from 'react-router-dom'

function AdminBookings() {

    const [allbookings,setallbooking] = useState([])
    const [searchKey,setSearchkey] = useState("")
    console.log(searchKey);

  const getallbookings = async()=>{
   
    
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
   
    const result = await allbookingsApi(searchKey,reqHeader)
    console.log(result);
    setallbooking(result.data)
  }
}
  useEffect(()=>{
    getallbookings()
  },[searchKey])

  return (
    <>
    <h1 className='text-danger mt-5 text-center'><Link to={'/adminhome'}><i class="fa-solid fa-arrow-left text-dark"></i></Link> USER BOOKINGS</h1>
    <input className='form control' value={searchKey} onChange={(e)=>setSearchkey(e.target.value)} type="text" placeholder='Search' style={{width:'500px',marginLeft:'430px'}} /> <i class="fa-solid fa-magnifying-glass fa-2x mt-2 ms-3"></i>
    <div className='row'>
      {allbookings?.length>0?
      allbookings.map((item)=>(<div className='col-md-4'><AdminCard booking={item}/></div>))
      :
      <h1 className='text-info text-center'>No Bookings</h1>}
    </div>
    </>
  )
}

export default AdminBookings