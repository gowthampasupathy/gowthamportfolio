import React from 'react'
import  "../cssfile/main.css"
import linkedin from '../asset/linkedin.svg'
import github from '../asset/github.svg'
import Home from './home'
import About from './about'
import Skill from './skill'
import { Link } from 'react-router-dom'
import Project from './project'

const Main = () => {
  const pop=()=>{
    let x=document.getElementById('navv');
    if(x.className==='group'){
      x.className="gp"
    }else{
      x.className="group"
    }

  }
  return (
    <div >
       <div className='over' id='top'>
       <nav className='topnav'>
      <a  className='log1' href='#home' >ガ</a>
        <a className='mobile' onClick={pop}> <i className="fas fa-bars"></i></a>
        </nav>
      
        <div className='navb'>
        <div className='group' id='navv'>
       <a className='log' href='#about' >About</a>
        <a className='log' href='#skill'>Skill</a>
        <a className='log' href='#project'>Project</a>
        <a className='txt'>LinkedIn</a>
        <a className='txt'>GitHub </a>
        </div>
        <a className='log2' href='https://www.linkedin.com/in/gowtham-pasupathi-885288276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkedin}></img></a>
        <a className='log3' href='https://github.com/gowthampasupathy'><img src={github}></img></a>
        
      </div>
      <div className='first' id='home'><Home/></div>
      <div className='second' id='about' ><About/></div>
      <div className='third' id='skill' ><Skill/></div>
      <div className='fourth' id='project'><Project/></div>
       </div>
    
    </div>
  )
}

export default Main
