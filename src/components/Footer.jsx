import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
        <div className="footer mt-2 text-white" style={{backgroundColor:'brown'}}>
            <Container>
                <Row>
                    <Col md={4} className='mt-3'>
                        <h4>LINKS</h4>
                        <div className="links ms-2" >
                            <a href='' style={{textDecoration:'none',color:'white'}}><p>HOME</p></a>
                            <a href='' style={{textDecoration:'none',color:'white'}}><p>ABOUT US</p></a>
                            <a href='' style={{textDecoration:'none',color:'white'}}><p>CONTACT</p></a>
                            <a href='' style={{textDecoration:'none',color:'white'}}><p>BOOKINGS</p></a>
                            
                        </div>
                    </Col>
                    <Col md={4} className='mt-3'>
                    <h4>REFERENCE</h4>
                        <div className="links ms-2" >
                            <a href='' style={{textDecoration:'none',color:'white'}}><p>YOU TUBE</p></a>
                            <a href='' style={{textDecoration:'none',color:'white'}}><p>BOOTSTRAP</p></a>
                            <a href='' style={{textDecoration:'none',color:'white'}}><p>REACT</p></a>
                            <a href='' style={{textDecoration:'none',color:'white'}}><p>GOOGLE</p></a>
                        </div>
                    </Col>
                    <Col md={4} className='mt-3'>
                    <h4>CONTACT US</h4>
                        <div className="links  d-flex" >
                            <a href='https://www.instagram.com/' style={{textDecoration:'none',color:'white'}} target='-blank'> <i class="fa-brands fa-instagram fa-2x mt-3 me-3"></i></a> <br />
                            <a href='https://support.google.com/mail/answer/8494?hl=en&co=GENIE.Platform%3DDesktop' style={{textDecoration:'none',color:'white'}} target='
                            -blank'><i class="fa-solid fa-envelope fa-2x mt-3 me-3"></i></a> <br />
                            <a href='https://web.whatsapp.com/' style={{textDecoration:'none',color:'white'}} target='
                            -blank'><i class="fa-brands fa-whatsapp fa-2x mt-3 me-3"></i></a> <br />
                            <a href='https://www.facebook.com/' style={{textDecoration:'none',color:'white'}} target='
                            -blank'><i class="fa-brands fa-facebook fa-2x mt-3"></i></a>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Footer