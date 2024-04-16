import React from 'react'
import  "../cssfile/abt.css"
import line from'../asset/about.png'
import { Col, Row } from 'react-bootstrap'


const Abt = () => {
  return (
    <div className='mid'>
      <Row>
        <Col xs={12} md={3} className='rowv'>
        <div className='piccon'> <img src={line}  className='photo' ></img></div>
        </Col>
        <Col xs={12} md={9}>
          <div className='cont'>
          <h5 className='para'>Hello there! My name is Gowtham and I am a pre-final year student at Karpagam College of Engineering. I am currently pursuing a degree in Information Technology and have a strong proficiency in the MERN stack as a versatile and dedicated full-stack web developer. I am actively seeking a position in a company where I can launch my career and build a valuable skill set.</h5>
          <h5>Contact:6374013119    | Email:gowthampasupathi17@gmail.com</h5>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Abt
