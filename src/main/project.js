import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';
import '../cssfile/project.css'
import Button from 'react-bootstrap/Button';
import proj1 from '../asset/letscode.png'
import proj2 from '../asset/lib.png'
import proj3 from '../asset/quiz.png'
import proj4 from '../asset/proj4.jpg'

const Project = () => {
  return (
    <div>
        <Row><Col xs={12} md={12} style={{color:'white',textAlign:'center'}}><h1>My Projects</h1></Col></Row>
      <div className='r1'>
        <Row className='rw1' style={{padding:'2rem '}} >
            <Col xs={12} md={4}>
            <Card style={{ width: '18rem' ,color:'white'}}>
            <Card.Img variant="top" src={proj1} />
            <Card.Body>
                <Card.Title>Lets Code</Card.Title>
                <Card.Text>
                Lets Code is a website similar to Leetcode, Where Students can able to practice various problems in it.
                </Card.Text>
                <Button style={{backgroundColor:'#af3dff',border:'#af3dff'}} href='https://github.com/gowthampasupathy/letscode'>Visit Lets Code</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card style={{ width: '18rem' ,color:'white'}}>
            <Card.Img variant="top" src={proj3} />
            <Card.Body>
                <Card.Title>Quiz App</Card.Title>
                <Card.Text>
                This is basic quiz website where students can able to attend quiz and get their results.
                </Card.Text>
                <Button style={{backgroundColor:'#af3dff',border:'#af3dff'}} href='https://github.com/gowthampasupathy/Quiz-App'>Visit Lets Code</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card style={{ width: '18rem' ,color:'white'}}>
            <Card.Img variant="top" src={proj2} />
            <Card.Body>
                <Card.Title>Library Management </Card.Title>
                <Card.Text>
                This  website is made with html and css and it is used to add,remove and update books in library
                </Card.Text>
                <Button style={{backgroundColor:'#af3dff',border:'#af3dff'}} href='https://github.com/gowthampasupathy/mernrepo/tree/main/librarymanagement'>Visit Lets Code</Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
        
      </div>
      <div className='r2'>
      <Row>
            <Col xs={12} md={12}>
            <Card style={{ width: '18rem' ,color:'white'}}>
            <Card.Img variant="top" src={proj4} />
            <Card.Body>
                <Card.Title>Scholarship Application</Card.Title>
                <Card.Text>
                This is the mobile Application used to know information about various scholarship and guidance to apply for that scholarship
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Project
