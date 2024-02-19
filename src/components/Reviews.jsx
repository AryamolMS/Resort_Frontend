import React from 'react'
import './review.css'
import { Container,Col,Row } from 'react-bootstrap'

function Reviews() {
  return (
    <>
               <Container>
        <h1 className='text-center mt-5' style={{color:'brown'}}>REVIEWS</h1>
        <marquee scrollamount='7'>
        <Row>
           
                
                <Col md={3}>
                    <div className="card1 Card shadow">
                    <img src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg" alt="" width={200} className='img2 Card shadow  mt-3 ms-4'/>
                    <p className='p-3'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.  <br /> Nesciunt illo deserunt ex </p>
                    </div>
                </Col>
                <Col md={3}>
                <div className="card1 Card shadow">
                    <img src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg" alt="" width={200} className='img2 Card shadow  mt-3 ms-4'/>
                    <p className='p-3'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.  <br /> Nesciunt illo deserunt ex </p>

                    </div>
                </Col>
                <Col md={3}>
                <div className="card1 Card shadow">
                    <img src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg" alt="" width={200} className='img2 Card shadow  mt-3 ms-4'/>
                    <p className='p-3'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.  <br /> Nesciunt illo deserunt ex </p>

                    </div>
                </Col>
                <Col md={3}>
                <div className="card1 Card shadow">
                    <img src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg" alt="" width={200} className='img2 Card shadow  mt-3 ms-4'/>
                    <p className='p-3'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.  <br /> Nesciunt illo deserunt ex </p>

                    </div>
                </Col>
    
                   </Row>
                   </marquee> 
       </Container>

    </>
  )
}

export default Reviews