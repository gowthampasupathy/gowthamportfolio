import React from 'react'
import  "../cssfile/main.css"
import  "../cssfile/start.css"
import  "../cssfile/footer.css"
import linkedin from '../asset/linkedin.svg'
import github from '../asset/github.svg'
import Home from './home'
import About from './abt'
import Skill from './skill'
import { Link } from 'react-router-dom'
import Project from './project'
import Footer from './footer'

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
      

      
        <div className='navb'>
        <div className='group' id='navv'>
        <a className='log' href='#about'  >About </a>
        <a className='log' href='#skill'>Skill </a>
        <a className='log' href='#project'>Project </a>

       <div className='logobottom'>
        
       <div className='outer'><a className='l1'  href='https://www.linkedin.com/in/gowtham-pasupathi-885288276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin-circled--v1.png" alt="linkedin-circled--v1"/></a></div>
       <div  className='outer'> <a className='l2' href='https://github.com/gowthampasupathy'><img width="45" height="45" src="https://img.icons8.com/sf-black/64/FFFFFF/github.png" alt="github"/></a></div>
       <div  className='outer'> <a className='l1'href=''><img width="30 " height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></a></div>
        <div  className='outer'><a className='l1' href='mailto:gowthampasupathi17@gmail.com'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail-new.png" alt="gmail-new"/></a></div>
       </div>
     
        </div>

  
        
      </div>
   
      <div className='first' id='home'><Home/></div>
      <div className='second' id='about' ><About/></div>
      <div className='third' id='skill' ><Skill/></div>
      <div className='fourth' id='project'><Project/></div>
       </div>

       <div>

    </div>
    <div className='bottom'>
        <div className='bottomnav'>
       
            <div className='botval '><div className='tooltiptext'>Home</div><a href='#home'> <img width="38" height="38" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png" alt="home"/></a></div>
            <div className='botval '><div className='tooltiptext'>About Me</div><a href='#about'><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/about-me.png" alt="about-me"/></a></div>
            <div className='botval'><div className='tooltiptext'>Projects</div><a href='#project'><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/project.png" alt="project"/></a></div>
            <div className='botval'><div className='tooltiptext'>Skill</div><a href='#skill'><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/learning.png" alt="learning"/></a></div>
        </div>
        </div>
    <div className='footer'>
        <h3 className='title'>--Thank You For Visiting --</h3>
        <div className='botlink'>
        <div className='link'><a href='#home'>Home</a></div>
        <div className='link'><a href='#about'>About</a></div>
        <div className='link'><a href='#skill'>Skill</a></div>
        <div className='link'><a href='#project'>Projects</a></div>
        </div>
        <div className='myname'>
            <h4>Portfolio || Designed By : Gowtham P</h4>
        </div>

      </div>
    
    </div>
  )
}

export default Main
