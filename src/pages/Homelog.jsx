import React, { useContext, useEffect,useState } from 'react'
import './style/home.css'
import { Row,Col, Container } from 'react-bootstrap'
import Header from '../components/Header'
import Reviews from '../components/Reviews'
import Card from '../components/Card'
import { addResponseStatusContext, isAuthtokenContext } from '../context/Contextshare'
import { displayuserRoomsnApi } from '../services/allAPI'
import { Link } from 'react-router-dom'


function Homelog() {
    const {addResponseStatus,setAddResponseStatus} = useContext(addResponseStatusContext)

    
    const [display,setDisplay] = useState([])

    const displayRooms = async()=>{
      const result = await displayuserRoomsnApi()
      console.log(result.data);
      setDisplay(result.data)
    }

    useEffect(()=>{

    },[addResponseStatus])

    useEffect(()=>{
        displayRooms()
    },[])

  return (
    <>
    <Header/>
       <div className='mt-5'>
           <Container>
                <Row>
                    <Col md={6} className='mt-5'>
                        <h1 style={{color:'brown',fontWeight:'bold'}}>Memories made, stories waiting to be told</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt beatae quas minus iste nulla officia voluptates magnam odio, in adipisci. Quos iusto rerum incidunt ex! Temporibus, facere! Corporis, eius voluptates?</p>
                        <Link to={'/bookings'}><button style={{ width: '200px',color: "white", fontWeight: 'bold', border: 'none'}} className='mt-3 btn btn-warning' rooms={display}>BOOK ROOMS</button></Link>
                    </Col>
                    <Col md={3}>
                        <img src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg" alt="no image"  className='mt-4 image1'/>
                    </Col>
                    <Col md={3}>
                        <img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no image"  className='mt-5 image1'/>
                    </Col>
                </Row>
    {/* ------------------------------------------------------------------------------------------------------------------------------ */}    
                <Row>
                    <h1 className='text-center mt-5' style={{color:'brown'}}>BOOK YOUR ROOMS</h1>
                    { display?.length>0?
                    display.map((item)=>( <Card display = {item}/>))
                :null
                }
          </Row>
           </Container>
       </div>
        <Reviews/>
      
    </>
  )
}

export default Homelog