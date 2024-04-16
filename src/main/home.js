import React from 'react'
import  "../cssfile/home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import line from'../asset/folio.png'
import resume from '../asset/resume.pdf'

const Home = () => {
  return (
    <div >
           <Container>
           <div className='outerdiv' >
           <Row  className='rowout' >
           {/* <Col xs={12} md={4}>
           <div className='side'>
           <img src={line} className='pic'></img>
           </div>
           </Col> */}
           <Col xs={12} md={15}>
            <div className="Home" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
             <h1  >Hello</h1> 
             <h1  className='name' style={{color:'#af3dff'}}>This Is Gowtham P</h1>
             <h5 className='content' >I am  a passionate full-stack web developer . With a strong foundation in the MERN Stack . I specialize in creating dynamic and responsive web application</h5>
             <div className='btntop'>
             <div class="button" data-tooltip="Size: 20Mb">
              <div class="button-wrapper">
              <a href={resume} download={"gowthamresume"}>
                <div class="text">Download Cv</div>
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                  </span>
                  </a>
                </div>
              </div>
             </div>
            </div>
           </Col>
         
           
            </Row>
           </div>
           </Container>
  </div>
  )
}

export default Home
