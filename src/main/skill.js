import React from 'react'
import "../cssfile/skill.css"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import logo from '../asset/react.svg'

const Skill = () => {
  return (
    <div>
        <Row className='head' ><Col xs={12} md={12}>
            <h1 > My Skills</h1></Col></Row>
      <div className='mmm' >
        <Row > 
            <Col xs={12} md={4} >
            <Card className='card' style={{ width: '15rem',color:'white',textAlign:'center',height:'100px' }}>
           <Card.Body>
                <Card.Text >
                <img width="70" height="70" src="https://img.icons8.com/carbon-copy/100/FFFFFF/c-programming.png" alt="c-programming"/>
                </Card.Text>
            </Card.Body>
    </Card>
            </Col>
            <Col xs={12} md={4} >
            <Card className='card' style={{width: '15rem',color:'white',textAlign:'center',height:'100px' }}>
            <Card.Body>
                <Card.Text>
                <img width="60" height="60" src="https://img.icons8.com/ios/50/FFFFFF/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4} >
            <Card className='card' style={{ width: '15rem',color:'white',textAlign:'center',height:'100px'  }}>
            <Card.Body>
                <Card.Text>
                <img width="60" height="60" src="https://img.icons8.com/ios-filled/50/FFFFFF/javascript.png" alt="javascript"/>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            
        </Row>

        
      </div>
      <div className='mm1'>
      <Row > 
            <Col xs={12} md={4} >
            <Card style={{ width: '15rem',color:'white',textAlign:'center',height:'100px' }}>
           <Card.Body>
                <Card.Text >
                <h3>MongoDB<img width="60" height="60" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"/></h3>
                </Card.Text>
            </Card.Body>
    </Card>
            </Col>
            
            <Col xs={12} md={4} >
            <Card style={{ width: '15rem',color:'white',textAlign:'center',height:'100px'  }}>
            <Card.Body>
                <Card.Text>
                    <h2>Express <img width="60" height="60" src="https://img.icons8.com/ios-filled/50/FFFFFF/javascript.png" alt="javascript"/></h2>
                
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4} >
            <Card style={{width: '15rem',color:'white',textAlign:'center',height:'100px' }}>
            <Card.Body>
                <Card.Text>
                <h2>Node <img width="64" height="64" src="https://img.icons8.com/windows/32/FFFFFF/node-js.png" alt="node-js"/></h2>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
           
        </Row>
      </div>
      <div className='mm2'>
      <Row > 
            <Col xs={12} md={4} >
            <Card style={{ width: '15rem',color:'white',textAlign:'center',height:'100px', }}>
           <Card.Body>
                <Card.Text >
                <h2>HTML <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/html-5--v1.png" alt="html-5--v1"/></h2>
                </Card.Text>
            </Card.Body>
    </Card>
            </Col>
            <Col xs={12} md={4} >
            <Card style={{width: '15rem',color:'white',textAlign:'center',height:'100px' }}>
            <Card.Body>
                <Card.Text>
                <h2>CSS<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/css3.png" alt="css3"/></h2>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4} >
            <Card style={{ width: '15rem',color:'white',textAlign:'center',height:'100px' }}>
            <Card.Body>
                <Card.Text>
                <h2>React <img src={logo}></img></h2>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
        </Row>
      </div>
      
    </div>
  )
}

export default Skill
