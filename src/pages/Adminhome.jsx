import React, { useContext, useEffect } from 'react'
import './style/home.css'
import { Col, Row } from 'react-bootstrap'
import ImageCard from '../components/ImageCard'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addRoomsnApi, displayRoomsnApi } from '../services/allAPI';
import { addResponseStatusContext, deleteResponseStatusContext, editResponseStatusContext, isAuthtokenContext } from '../context/Contextshare';
import { Link, useNavigate } from 'react-router-dom';


function Adminhome() {

  const {isAuthtken,setIsAuthtoken} = useContext(isAuthtokenContext)
  const navigate = useNavigate()

 const logeout = ()=>{
   sessionStorage.removeItem("token")
   sessionStorage.removeItem("existinguser")
   setIsAuthtoken(false)
   navigate('/')
  
 }

  
  const {editResponseStatus,setEditResponseStatus} = useContext(editResponseStatusContext)
  const {deleteResponseStatus,setDeleteResponseStatus} = useContext(deleteResponseStatusContext)
  const {addResponseStatus,setAddResponseStatus} = useContext(addResponseStatusContext)

  const [display,setDisplay] = useState([])

  const [displayadd,setDisplayadd] = useState({})

  console.log(display);

  const [roomDetails,setRoomdetails] = useState({
      Name:"",
      Services:"",
      Count:"",
      Type:"",
      Amount:"",
      roomImage:""
  })

  console.log(roomDetails);

  const getrooms = async()=>{
   const result = await displayRoomsnApi()
   console.log(result.data);
   setDisplay(result.data)
  }
  
  
  useEffect(()=>{
    getrooms()
  },[displayadd,editResponseStatus,deleteResponseStatus])


  const [image,setImage] = useState("")


  useEffect(()=>{
   roomDetails.roomImage &&
   ( setImage(URL.createObjectURL(roomDetails.roomImage)))
  },[roomDetails.roomImage])

  console.log(image);


  const handleClose1 = ()=>{
    setRoomdetails({
      Name:"",
      Services:"",
      Count:"",
      Type:"",
      Amount:"",
      roomImage:""
    })
    setImage("")
  }

  const handleAdd = async(e)=>{
    e.preventDefault()

    const {Name,Services,Count,Type,Amount,roomImage} = roomDetails

    if(!Name || !Services || !Count || !Type || !Amount || !roomImage){
      toast.warning('Please fill this form completely')
    }
    else{
      //reqBody
      const reqBody = new FormData()

      reqBody.append("Name",Name)
      reqBody.append("Services",Services)
      reqBody.append("Count",Count)
      reqBody.append("Type",Type)
      reqBody.append("Amount",Amount)
      reqBody.append("roomImage",roomImage)

      //reqHeader
      const reqHeader = {
        'Content-Type':'multipart/form-data',
      }
     const result =  await addRoomsnApi(reqBody,reqHeader)
     console.log(result);

     if(result.status === 200){
      console.log(result.data);
      toast.success('Room added successfully')
      handleClose()
      setDisplayadd(result.data)
      setAddResponseStatus(result.data)
     }
     else{
      console.log(result.response.data);
     }
    }

  }

  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    handleClose1()
  };
  const handleShow = () => setShow(true);

  return (
    <> 
        <div className='d-flex'>
        <div className="sidebar d-flex flex-column p-3 bg-info" style={{width:'200px',height:'auto'}}>
        <h3 className='text-white me-5 mt-5 ms-3' style={{fontSize:'20px'}} onClick={logeout}>LogOut <i class="fa-solid fa-power-off ms-2"></i></h3>
        <h3 className='text-white me-5 mt-2 ms-3' style={{fontSize:'20px'}} onClick={handleShow}>Rooms</h3>
        <Link to={'/adminbookings'} style={{textDecoration:'none',color:'white'}}><h3 className='text-white me-5 mt-2 ms-3' style={{fontSize:'20px'}}>Bookings</h3></Link>
        </div>
      
          <div className='imagcard ms-5'>
          <div className="bg-info p-4 text-light rounded  mt-5" style={{ width: '1100px' }}>   
              <h2 className="ms-5 text-white"> <i class="fa-solid fa-bars me-5"></i>Welcom Admin</h2>        
          </div>
          {display?.length>0?
          display.map((item)=>( <ImageCard roomdata={item}/> ))
            :
            null}
          </div>
          
        </div>


        {/* modal */}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Room Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row >
            <Col md={6}>
              <label htmlFor='profile'>
                <input onChange={(e)=>setRoomdetails({...roomDetails,roomImage:e.target.files[0]})} className='mt-3 mb-4' id='profile' type="file" style={{ marginLeft: '100px', display: 'none' }} />
                <img src={image?image:"https://media.istockphoto.com/id/1153225644/photo/3d-render-of-luxury-hotel-room.webp?b=1&s=170667a&w=0&k=20&c=kTLR1ZpHx9DG0gJFFZqR-6IBvETS8j8BvB9L5EEhjTw="} alt="no image" style={{height:'250px',width:'300px'}} />
              </label>
            </Col>
            <Col md={6}>
            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter Room Name' className='form-control' value={roomDetails.Name} onChange={(e)=>setRoomdetails({...roomDetails,Name:e.target.value})}/> <br />

            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter services' className='form-control' value={roomDetails.Services} onChange={(e)=>setRoomdetails({...roomDetails,Services:e.target.value})}/> <br />

            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='count' className='form-control' onChange={(e)=>setRoomdetails({...roomDetails,Count:e.target.value})} value={roomDetails.Count}/> <br />

            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter Type' className='form-control' value={roomDetails.Type} onChange={(e)=>setRoomdetails({...roomDetails,Type:e.target.value})}/> <br />

            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter Amount' className='form-control' value={roomDetails.Amount} onChange={(e)=>setRoomdetails({...roomDetails,Amount:e.target.value})}/> <br />


            <input onClick={handleAdd} type="submit" value="Add" className='p-2 text-white rounded' style={{backgroundColor:'green',width:'100px',border:'none',fontSize:'20px',fontWeight:'bold'}}/>

            <input onClick={handleClose1} type="submit" value="Clear" className='p-2 text-white rounded' style={{backgroundColor:'red',marginLeft:'50px',border:'none',fontSize:'20px',fontWeight:'bold',width:'100px'}}/>
            </Col>
          </Row>

          <div className='d-flex'>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Adminhome