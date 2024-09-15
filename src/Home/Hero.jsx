import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Welcome from './Small components/Welcome.jsx'
import Sub from './Small components/sub.jsx'
import './Styling/Hero.css'

function Hero() {
  return (
    <div className='Hero'>
        <div className='Hero1'>
        <Navbar />
      </div>

      {/* <div className="center">
        <div className="in">
          <Welcome text="Welcome to 'Money Matters'"/>
          <Bar />
          <Sub text="Where Education Meets Financial Empowerment"/>
        </div>
      </div> */}

      <div className="Hero2"></div>
    </div>
  )
}

export default Hero