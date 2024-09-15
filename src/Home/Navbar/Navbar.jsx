import React from 'react'
import Button from './Button'
import './Navstyle.css'

function Navbar() {
  
  return (
    <div className="navbar">
      <a href="/" className='Logo'>
        <img src="/Money_Matters.png" alt="Logo" />
      </a>

      <div className="menu">
        <Button text="Home" url="/" />
        <Button text="Events" url="/Events" />
        <Button text="Gallery" url="/Gallery" />
        <Button text="Team" url="/Team" />
        <Button text="About" url="/About" />
      </div>
    </div>
  );
}

export default Navbar