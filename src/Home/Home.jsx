// import React from 'react'
import Hero from './Hero'
import About from './About.jsx'
import Team from './Team.jsx'
import Footer from './Footer.jsx'
import './Styling/Home.css'
import Navbar from './Navbar/Navbar.jsx'
import React, { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <div className='main'>
      <Navbar/>
      <Hero />
      {/* <About /> */}
      {/* <Team /> */}
      {/* <Footer /> */}
    </div>
  );
});

export default Home