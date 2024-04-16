import React from 'react'
import  "../cssfile/abt.css"
import line from'../asset/about.png'
import { Col, Row } from 'react-bootstrap'


const Abt = () => {
  return (
    <div className='mid'>
      <div className='aboutme'><h1>About Me</h1></div>
      <Row className='row'>
        <Col xs={12} md={3} className='rowv' >
        <div className='piccon'> <img src={line}  className='photo' ></img></div>
        </Col>
        <Col xs={12} md={9} style={{backgroundColor:''}} className='col2'>
          <div className='cont' >
          <h5 className='para'>Hello there! My name is Gowtham and I am a pre-final year student at Karpagam College of Engineering. I am currently pursuing a degree in Information Technology and have a strong proficiency in the MERN stack as a versatile and dedicated full-stack web developer. I am actively seeking a position in a company where I can launch my career and build a valuable skill set.</h5>
         <div><h5><img width="32" height="32" src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-phone.png" alt="apple-phone" /> 6374013119   
         &emsp;<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail-new.png" alt="gmail-new"/> gowthampasupathi17@gmail.com</h5>
         
         </div>
          </div>
          <div className='cont2'>
          <h5 className='para'>Hello there! My name is Gowtham and I am a pre-final year student at Karpagam College of Engineering. I am currently pursuing a degree in Information Technology and have a strong proficiency in the MERN stack as a versatile and dedicated full-stack web developer. I am actively seeking a position in a company where I can launch my career and build a valuable skill set.</h5>
         <div><h5><img width="32" height="32" src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-phone.png" alt="apple-phone" /> 6374013119 </h5>  
         <h5><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail-new.png" alt="gmail-new"/> gowthampasupathi17@gmail.com</h5>
         <div className='logolist'>
         <div className='reslogo'><a  className='logo1'   href='https://www.linkedin.com/in/gowtham-pasupathi-885288276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin-circled--v1.png" alt="linkedin-circled--v1"/></a></div>
          <div  className='reslogo'> <a className='logo2' href='https://github.com/gowthampasupathy'><img width="45" height="45" src="https://img.icons8.com/sf-black/64/FFFFFF/github.png" alt="github"/></a></div>
          <div  className='reslogo'> <a className='logo1'href=''><img width="30 " height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></a></div>
          <div  className='reslogo'><a className='logo1' href='mailto:gowthampasupathi17@gmail.com'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail-new.png" alt="gmail-new"/></a></div>
         </div>
         
         </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Abt
