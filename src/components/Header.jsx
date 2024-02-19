import React, { useContext, useEffect } from 'react'
import './header.css'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthtokenContext } from '../context/Contextshare';
import { baseurl } from '../services/baseurl';
import { editUserApi } from '../services/allAPI';


function Header() {
  const {isAuthtken,setIsAuthtoken} = useContext(isAuthtokenContext)
  const navigate = useNavigate()

 const logeout = ()=>{
   sessionStorage.removeItem("token")
   sessionStorage.removeItem("existinguser")
   setIsAuthtoken(false)
   navigate('/')
  
 }


  const [userprofile,setUserProfile] = useState({
    "profile":"",
    "username":"",
    "email":"",
    "password":""
  })

 console.log(userprofile);

 const [existingimage,setExistingimage] = useState("")

 const [preview,setPreview] = useState("")
 console.log(preview);

 const [isUpdate,setIsupdate] = useState(false)


useEffect(()=>{
  const users = JSON.parse(sessionStorage.getItem("existinguser"))
  setUserProfile({...userprofile,username:users.username,email:users.email,password:users.password,profile:""})

  setExistingimage(users.profile)
},[isUpdate])

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(userprofile.profile){
    setPreview(URL.createObjectURL(userprofile.profile))}
    else{
      setPreview("")
    }
  },[userprofile.profile])


  const updateProfile = async()=>{

    const {profile,username,email,password} = userprofile

    if(!profile){
      alert('Please fill the form')
    }
    else{
      const reqBody = new FormData()

      preview?reqBody.append("profile",profile):reqBody.append("profile",existingimage)
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
   
    const token = sessionStorage.getItem("token")

    if(preview){
      const reqHeader = {
        'Content-Type':'multipart/form-data',
        'Authorization':`Bearer ${token}`
      }
      const result = await editUserApi(reqBody,reqHeader)
      console.log(result);
      if(result.status===200){
        alert('Profile updated')
        sessionStorage.setItem("existinguser",JSON.stringify(result.data))
        setIsupdate(true)
      }
      else{
        console.log(result);
      }
      }
      else{
        const reqHeader = {
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
        const result = await editUserApi(reqBody,reqHeader)
      console.log(result);
      if(result.status===200){
        alert('Profile updated')
        sessionStorage.setItem("existinguser",JSON.stringify(result.data))
        setIsupdate(true)

      }
      else{
        console.log(result.response.data);
      }
    }
  
  }
}

  return (
    <>
      <div className='headers me-auto d-flex' style={{height:'50px',backgroundColor:'brown',width:'100%'}}>
        <div style={{marginLeft:'1100px'}} className='d-flex mt-2 text-white'>
        <Link to={'/viwebokings'} style={{textDecoration:'none',color:'white'}}><h6 className='ms-4'>Bookings</h6></Link>
          <h6 className='ms-5'onClick={handleShow}>Profile</h6>
          <h6 className='ms-4' onClick={logeout}><i class="fa-solid fa-power-off ms-2"></i></h6>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label htmlFor='profile'>
                  <input onChange={(e)=>setUserProfile({...userprofile,profile:e.target.files[0]})}  className='mt-3 mb-4' id='profile' type="file" style={{ marginLeft: '100px', display: 'none' }} />
                 {existingimage? <img  src={preview?preview:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} alt="no image" style={{height:'200px',width:'200px',marginLeft: '130px',borderRadius:'50%'}} />
                 :<img  src={preview?preview:`${baseurl}/uploadimages/${existingimage}`} alt="no image" style={{height:'200px',width:'200px',marginLeft: '130px',borderRadius:'50%'}} />}
                </label>
                <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter name' className='form-control mt-4' value={userprofile.username} onChange={(e)=>setUserProfile({...userprofile,username:e.target.value})}/> <br />
  
              <input style={{borderRadius:'10px',border:'1px solid black'}} type="email" placeholder='Enter email' className='form-control' value={userprofile.email} onChange={(e)=>setUserProfile({...userprofile,email:e.target.value})}/> <br />

              <input style={{borderRadius:'10px',border:'1px solid black'}} type="password" placeholder='Enter password' className='form-control' value={userprofile.password} onChange={(e)=>setUserProfile({...userprofile,password:e.target.value})}/> <br />

              <input onClick={updateProfile} type="submit" className='btn btn-success' value="Update" />
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Header