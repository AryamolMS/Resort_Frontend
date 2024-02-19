import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style/home.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
        <div className="bagimage">
          <div className=' maindiv'>
            <h1>Travel Make Life More Beautiful</h1>
           <Link to={'/user/register'}> <button className='btn btn-success mt-5'>EXPLORE</button></Link>
          </div>
       </div>

       <div className="rooms">
        
          <Container>
          <h1 className='text-center' style={{color:'brown'}}>Rooms</h1>
              <div className='gallery'>
                <Row>
                  <Col md={4}>
                  <div>  <img className='room mt-4' src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt="" /></div>
                  </Col>
                  <Col md={4}>
                   <div> <img className='room mt-4' src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt="" /></div>
                  </Col>
                  <Col md={4}>
                    <div><img className='room mt-4' src="https://media.istockphoto.com/id/1210328194/photo/ocean-sunset-view-from-bedroom-balcony-for-travel-concept.webp?b=1&s=170667a&w=0&k=20&c=VvPLHfCIazQ0Yq8UewN1fOohBembuH_LbNwZmmQpRLE=" alt="" /></div>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <div><img className='room mt-4' src="https://img.freepik.com/premium-photo/enjoying-sunset-beach-view-from-hotel-room_848747-50.jpg" alt="" /></div>
                  </Col>
                  <Col md={4}>
                    <div><img className='room mt-4' src="https://img.freepik.com/premium-photo/bedroom-with-view-ocean-chair_771703-32501.jpg" alt="" /></div>
                  </Col>
                  <Col md={4}>
                    <div><img className='room mt-4' src="https://img.freepik.com/premium-photo/bedroom-with-view-ocean-bed-with-chair-front-it_780838-3052.jpg" alt="" /></div>
                  </Col>
                </Row>
              </div>
          </Container>
       </div>

       <section>
        <div className="about">
            <h1 className='text-center fw-4 mt-5' style={{color:'brown'}}>ABOUT US</h1>
           <Container>
                <Row>
                    <Col md={6}><br /><br /><br />
                    <p className='ms-2 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptatum, porro ut ipsam optio ipsa, molestiae delectus ab maiores, libero harum error itaque impedit voluptates ratione cupiditate distinctio magnam. Facere?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est minima earum nisi deserunt excepturi officiis facere unde nemo sint animi necessitatibus, saepe possimus labore nesciunt reprehenderit rem similique aspernatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </Col>
                    <Col md={3}>
                        <img className='aboutimg mt-2' src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                    <Col md={3}>
                        <img className='aboutimg mt-5' src="https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                </Row>
           </Container>
        </div>
       </section>


       <section className='section'>
        <div className="services">
            <h1 className='text-center fw-4 mt-5' style={{color:'brown'}}>SERVICES</h1>
          <div className="roomservices">
            <Container>
                <Row>
                    <Col md={3} className='mt-4'>
                    <p style={{textAlign:'center'}}><i class="fa-solid fa-soap fa-3 "></i></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, praesentium dolor! Asperiores consequuntur earum accusantium totam inventore veniam, quibusdam quisquam, exercitationem provident possimus cum animi commodi expedita nisi corrupti aspernatur?</p>
                    </Col>
                    <Col md={3} className='mt-4'>
                        <p style={{textAlign:'center'}}><i class="fa-solid fa-hotel"></i></p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quam dolorum illo eius corrupti tempore, voluptatum iste suscipit voluptate numquam itaque, incidunt soluta adipisci reprehenderit nesciunt sapiente rerum magnam laboriosam!</p>
                    </Col>
                    <Col md={3} className='mt-4'>
                        <p style={{textAlign:'center'}}><i class="fa-solid fa-utensils"></i></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, soluta nulla fuga mollitia, nihil saepe culpa adipisci repellat repellendus voluptate consequuntur. Nostrum, accusamus? Voluptatum accusamus adipisci ipsam labore architecto! Error.</p>
                    </Col>
                    <Col md={3} className='mt-4'>
                    <p style={{textAlign:'center'}}><i class="fa-solid fa-location-dot"></i></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum odit suscipit magni voluptates cumque quia veniam ducimus sapiente nobis atque voluptas similique dolore facere nihil impedit, inventore, non ut?</p>
                    </Col>
                </Row>
            </Container>
          </div>
        </div>
       </section>

       <section>
        <div className="activities mt-5">
            <h1 style={{color:'brown',textAlign:'center'}}>OTHER ACTIVITIES</h1>
            <Container>
                <Row>
                    <Col md={4}>
                        <img src="https://images.pexels.com/photos/1426715/pexels-photo-1426715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='mt-4 image'/>
                    </Col>
                    <Col md={4}>
                        <img src="https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='mt-4 image'/>
                    </Col>
                    <Col md={4}>
                        <img src="https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className='mt-4 image'/>
                    </Col>
                </Row>
            </Container>        
            </div>
       </section>
    </>
  )
}

export default Home