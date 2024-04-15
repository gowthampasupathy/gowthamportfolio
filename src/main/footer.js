import React from 'react'
import  "../cssfile/footer.css"

const Footer = () => {
  return (
    <div>
        <div className='footer'>
        <h3 className='title'>--Thank You For Visiting --</h3>
        <div className='botlink'>
          <div className='link' ><a href='#home'>Home</a></div>
          <div  className='link'><a>About Me</a></div>
          <div className='link' ><a>Skill</a></div>
          <div  className='link' ><a>Projects</a></div>
        </div>
        <div className='myname'>
            <h4>Portfolio || Designed By : Gowtham P</h4>
        </div>

      </div>
    </div>
  )
}

export default Footer
