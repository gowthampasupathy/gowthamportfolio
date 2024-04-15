import React from 'react'
import  "../cssfile/main.css"
import  "../cssfile/start.css"
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
        </nav>
        <div className='bottom'>
        <div className='bottomnav'>
            <div className='botval ' href="about"><div className='tooltiptext'>About Me</div><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/about-me.png" alt="about-me"/></div>
            <div className='botval'><div className='tooltiptext'>Projects</div><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/project.png" alt="project"/></div>
            <div className='botval'><div className='tooltiptext'>Skill</div><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/learning.png" alt="learning"/></div>
            <div className='botval'><div className='tooltiptext'>Contact</div><img width="40" height="40" src="https://img.icons8.com/material/48/FFFFFF/business-contact--v1.png" alt="business-contact--v1"/></div>
        </div>
        </div>

      
        <div className='navb'>
        <div className='group' id='navv'>
        <a className='log' href='#about'  >About</a>
        <a className='log' href='#skill'>Skill</a>
        <a className='log' href='#project'>Project</a>
        <a className='log2' href='https://www.linkedin.com/in/gowtham-pasupathi-885288276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkedin}></img></a>
        <a className='log3' href='https://github.com/gowthampasupathy'><img src={github}></img></a>
        </div>
  
        
      </div>
     
      
      </div>
       </div>
    
 
  )
}

export default Main
