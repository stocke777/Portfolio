import React from 'react'
import './../styles/Typing.css'
const Title = () => {
  return (
    <div className='wrapper'>
        <div className="static">
          I work with
        </div>
        <div className="dynamic">
          <li><span>Javascript</span></li>
          <li><span>HTML</span></li>
          <li><span>Python</span></li>
        </div>
    </div>
  )
}

export default Title