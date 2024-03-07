import React from 'react'
import  "../cssfile/main.css"
import linkedin from '../asset/linkedin.svg'
import github from '../asset/github.svg'

const main = () => {
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
        <nav className='topnav'>
        <a className='log1' >ガ</a>
        <a className='mobile' onClick={pop}> <i className="fas fa-bars"></i></a>
        </nav>
      
        <div className='navbar'>
        <div className='group' id='navv'>
        <a className='log' style={{marginRight:"30px"}}>About</a>
        <a className='log'>Project</a>
        <a className='log'>Skill</a>
        <a className='log'>Contact</a>
        <a className='txt'>LinkedIn</a>
        <a className='txt'>GitHub </a>
        </div>
        <a className='log2'><img src={linkedin}></img></a>
        <a className='log3'><img src={github}></img></a>
        
      </div>
    </div>
  )
}

export default main
