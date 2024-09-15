import React from 'react'
import Welcome from './Small components/Welcome'
import './Styling/About.css'

function About() {
  return (
    <div className='About'>
        <div className="text">
          <Welcome text="ABOUT US"/>

          <p className='first'>At Money Matters IIITNR, our mission is to simplify the complexities of personal finance and investing. We provide a collaborative platform where students can access educational resources and apply them to real-world financial scenarios.</p>
          <p>Our goal is to foster financial literacy and build a community of like-minded individuals passionate about achieving financial growth and success. By bridging the gap between finance and technology, we equip our members with the tools and knowledge to navigate today's ever-evolving financial landscape. Join us as we learn, grow, and thrive together on the path to financial empowerment!</p>

          <div className="grp">
            <img src="/group.jpg" alt="Group Photo" />
          </div>
        </div>
    </div>
  )
}

export default About