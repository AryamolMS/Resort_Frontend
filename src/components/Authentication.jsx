import React, { useContext, useState } from 'react'
import './auth.css'
import {Container, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthtokenContext } from '../context/Contextshare'

function Authentication({register}) {

  const {isAuthtken,setIsAuthtoken} =  useContext(isAuthtokenContext)

  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()

  //function to register
  const handleRegister = async(e)=>{
     e.preventDefault()

     const {username,email,password} = userData

     if(!username || !email || !password){
      toast.warning('Please fill the form completely')
     }
     else{
      const result =  await registerApi(userData)
      console.log(result);
      if(result.status === 200){
        toast.success(`${result.data.username} Registered successfully`)
        
        setUserData({
          username:"",
          email:"",
          password:""
        })
        //navigate
        navigate('/user/login')
      }
      else{
        toast.error(result.response.data)
      }
     }
  }

  console.log(userData);


  //function to login
  const handleLogin = async(e)=>{
    e.preventDefault()

    const {email,password} = userData

    if(!email || !password){
      toast.warning('Please fill the form completely')
    }
    else{
    const result = await loginApi(userData)
    console.log(result);
    if(result.status == 200){
      if(email == "admin@gmail.com" && password == "Admin123"){
        //alert
        toast.success('Login successfull')
        setIsAuthtoken(true)
        //storage
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)

        //state empty
        setUserData({
          email:"",
          password:""
        })
        //navigate
        setTimeout(()=>{
          navigate('/adminhome')
        },3000)
        
      }
      else{
        //alert
        toast.success('Login successfull')
        //storage
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        //state empty
        setUserData({
          email:"",
          password:""
        })
        //navigate
        navigate('/homelogin')
      }
    }
    else{
      toast.error(result.response.data)
    }
    }
  }

  const registerForm = register?true:false

  return (
    <>
      <Container>
        <Row>
          <Col md={2}>
          </Col>

          <Col md={4}>
          <img src="https://statispos.kominfo.go.id/skot/assets/images/profile-img.png" alt="" style={{width:'300px',height:'300px'}}/>
          </Col>
          <Col md={6}>
          <div className='login Card shadow mt-5'>
            <form className=' w-100 mt-5'>
              { registerForm?
                <h1 className='text-center mt-5 mb-3'>Register</h1>
              : <h1 className='text-center mt-5 mb-3'>Login</h1>
              }  
             
             { registerForm?
             <div>
                <input type="text" placeholder='Enter your name' className='input text-center w-75' value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}/>  <br /><br />
                </div> 
                :null}

                <input type="email" name="" id="" placeholder='Email' className='input text-center w-75 ' value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>  <br /> <br />

              <input type="password" name="" id="" placeholder='Password' className='input text-center w-75 ' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/> <br /> <br />

              {registerForm ?
              <input type="submit" value="Register" className='submit1 text-center w-75 ' onClick={handleRegister}/>
              :<input type="submit" value="Login" className='submit1 text-center w-75' onClick={handleLogin}/>

              }
            </form>
            { registerForm?
              <p className='mt-2 text-center text-light'>Already have an account? <Link to={'/user/login'} style={{textDecoration:'none',color:'black',fontSize:'15px',fontWeight:'bold',fontFamily:'poppins'}}>LOGIN</Link></p>
              :<p className='mt-5 text-center text-light'>
                Don't have an account? <Link to={'/user/register'}style={{textDecoration:'none',color:'black',fontSize:'20px',fontWeight:'bold',fontFamily:'poppins'}}>Register</Link> 
              </p>
              }
          </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Authentication