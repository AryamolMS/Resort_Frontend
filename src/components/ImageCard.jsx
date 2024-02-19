import { Col, Row } from 'react-bootstrap'
import './header.css'
import { baseurl } from '../services/baseurl';
import Edit from './Edit';
import { deleteroomApi } from '../services/allAPI';
import { useContext } from 'react';
import { deleteResponseStatusContext } from '../context/Contextshare';

function ImageCard({roomdata}) {
  
  const {deleteResponseStatus,setDeleteResponseStatus} = useContext(deleteResponseStatusContext)

  const handleDelete = async(id)=>{
    const reqHeader = {
      'Content-Type':'application/json'
    }
    const result = await deleteroomApi(id,reqHeader)
    console.log(result);
    setDeleteResponseStatus(result)
  }
  

    return (
    <>
   <>
    

 <Row className='Card shadow mt-5 d-flex' style={{width:'900px',height:'280px',marginLeft:'100px'}}>
  <div  className='d-flex'>
    <Col md={4}>
      <img src= {roomdata?`${baseurl}/uploadimages/${roomdata.roomImage}`:"https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}alt="" style={{ width: '300px', height: '230px' }} className='Card shadow mt-4 rounded ms-2' />
    </Col>
    <Col md={8} className='flex-cloumn mt-3'>
      
      <h4 className='ms-5'>{roomdata.Name}</h4>
      <p className='ms-5'>Services : {roomdata.Services}</p>
      <p className='ms-5'>Count :{roomdata.Count}</p>
      <p className='ms-5'>Type : {roomdata.Type}</p>
      <h4 className='ms-5'>₹{roomdata.Amount}</h4>
      <div className='d-flex ms-4 mt-4'>
      <Edit data={roomdata}/>         
      <span className='ms-5 mb-3 text-danger' onClick={()=>handleDelete(roomdata._id)}> <i class="fa-solid fa-trash"></i></span>
      </div>
    </Col>
  </div>
 </Row>
      
   </>

    </>
  )
}

export default ImageCard