import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import  { useEffect } from 'react'
import { baseurl } from '../services/baseurl';
import { editRoomsnApi } from '../services/allAPI';
import { editResponseStatusContext } from '../context/Contextshare';


function Edit({data}) {

  const {editResponseStatus,setEditResponseStatus} = useContext(editResponseStatusContext)

  const [preview,setPreview] = useState("")

  const [roomDetails,setRoomdetails] = useState({
    id:data._id,
    Name:data.Name,
    Services:data.Services,
    Count:data.Count,
    Type:data.Type,
    Amount:data.Amount,
    roomImage:""
})
console.log(roomDetails);

useEffect(()=>{
  if(roomDetails.roomImage){
  setPreview(URL.createObjectURL(roomDetails.roomImage))}
},[roomDetails.roomImage])

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);
    handleClose1()}
  const handleShow = () => setShow(true);
    
      const handleClose1 = ()=>{
        setRoomdetails({
          id:data._id,
          Name:data.Name,
          Services:data.Services,
          Count:data.Count,
          Type:data.Type,
          Amount:data.Amount,
          roomImage:""
        })
        setPreview("")
      }

      const handleUpdate = async()=>{

       
        const {id,Name,Services,Count,Type,Amount,roomImage} = roomDetails

        if(!Name || !Services || !Count || !Type || !Amount){
          alert('Plas fill this form')
        }
        else{
          const reqBody = new FormData()

          reqBody.append("Name",Name)
          reqBody.append("Services",Services)
          reqBody.append("Count",Count)
          reqBody.append("Type",Type)
          reqBody.append("Amount",Amount)
          preview?reqBody.append("roomImage",roomImage):reqBody.append("roomImage",data.roomImage)
        
        const token = sessionStorage.getItem("token")
        if(preview){
            const reqHeader = {
              'Content-Type':'multipart/form-data',
              'Authorization':`Bearer ${token}`
            }
            const result = await editRoomsnApi(id,reqBody,reqHeader)
            console.log(result);
            if(result.status === 200){
              alert('Updated successfully')
              handleClose()
              setEditResponseStatus(result.data)
            }
            else{
              console.log(result.response.data);
            }
        }
        else{
          const reqHeader = {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
          }
          const result = await editRoomsnApi(id,reqBody,reqHeader)
          console.log(result.data);
          if(result.status === 200){
            alert('Updated successfully')
            handleClose()
            setEditResponseStatus(result.data)
          }
          else{
            console.log(result.response.data);
          }
        }
      }
    }
    
  return (
    <>
    <span className='ms-5 text-success'><i class="fa-solid fa-pen-to-square" onClick={handleShow}></i></span>
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
                <img src={preview?preview:`${baseurl}/uploadimages/${data.roomImage}`} alt="" style={{width:'300px',height:'200px'}} className=' mt-3 rounded ms-2' />
              </label>
            </Col>
            <Col md={6} className=''>
            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter Room Name' className='form-control' value={roomDetails.Name} onChange={(e)=>setRoomdetails({...roomDetails,Name:e.target.value})}/> <br />

            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter services' className='form-control'  value={roomDetails.Services} onChange={(e)=>setRoomdetails({...roomDetails,Services:e.target.value})}/> <br />
            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='count' className='form-control'  value={roomDetails.Count} onChange={(e)=>setRoomdetails({...roomDetails,Count:e.target.value})}/> <br />

            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter Type' className='form-control' value={roomDetails.Type} onChange={(e)=>setRoomdetails({...roomDetails,Type:e.target.value})}/> <br />

            <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter Amount' className='form-control'  value={roomDetails.Amount} onChange={(e)=>setRoomdetails({...roomDetails,Amount:e.target.value})}/> <br />

            <div className='d-flex ms-5'>
              <input type="submit" value="Update" className='btn btn-success' style={{border:'none',width:'100px'}} onClick={handleUpdate}/>
              <input type="submit" value="Cancel" className='p-2 text-white rounded ms-3' style={{backgroundColor:'brown',marginLeft:'100px',border:'none',width:'100px'}} onClick={handleClose1}/>
            </div>
            </Col>
          </Row>

          <div className='d-flex'>
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Edit