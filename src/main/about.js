import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import line from'../asset/about.png'
import "../cssfile/about.css"
const About = () => {
  return (
    <div>
      <Container>
        <div > 
        <Row className=' abouttop'>
            <Col xs={12} md={4} className='right' >
            <Card className='card1' >
            <Card.Body>
          <div className='piccon'> <img src={line}  className='photo' ></img></div>
            </Card.Body>
            </Card>
            </Col>
            {/* <Col xs={12} md={8} className='card2'>
                <h1 className='topic'> Self Summary</h1>
                <Card  className='down'>
                <Card.Body>
                    <div>
                        <h5 className='description'>I'm Gowtham, a versatile and dedicated full-stack web developer passionate about crafting exceptional digital experiences. With proficiency in the MERN stack, I thrive in dynamic environments where I can leverage my technical skills and creativity to build innovative solutions. I approach each project with enthusiasm, attention to detail, and a commitment to delivering high-quality results. Continuously learning and adapting, I'm excited about the ever-evolving world of web development and eager to tackle new challenges head-on.</h5>
                        <h5>Contact:6374013119    | Email:gowthampasupathi17@gmail.com</h5>
                    </div>
                </Card.Body>
                </Card>
            </Col> */}
        </Row>
        </div>
        {/* <div>
          <Row style={{padding:10}}>
            <Col xs={12} md={7}>
            <Card  className='card3'>
                <Card.Body>
                    <div>
                      <h3 className='smtopic'>Education</h3>
                     <div  className='edu'>
                     <h6>B.TECH INFORMATION TECHNOLOGY</h6>
                      <h6>KARPAGAM COLLEGE OF ENGINEERING</h6>
                        <p className='description'>2021-2025(pursuing)</p>
                     </div>
                     <div className='edu'>
                     <h6   >HSC </h6>
                      <h6 className='edu' >ST.JAMES MATRICULATION HIGHER SECONDARY SCHOOL</h6>
                        <p className='description'>2020 - 2021</p>
                     </div>
                     <div className='edu'>
                     <h6 >SSLC  </h6>
                      <h6>ST.JAMES MATRICULATION HIGHER SECONDARY SCHOOL</h6>
                        <p className='description'>2018-2019</p>
                     </div>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={5}>
            <Card  className='card4'>
                <Card.Body>
                <div>
                      <h3 className='smtopic'>Certification</h3>
                      <h6>B.TECH INFORMATION TECHNOLOGY</h6>
                      <h6>KARPAGAM COLLEGE OF ENGINEERING</h6>
                        <p className='description'>2021-2025(pursuing)</p>
                    </div>
                </Card.Body>
                </Card>
            </Col>
          </Row>
        </div> */}
      </Container>
    </div>
  )
}

export default About;
