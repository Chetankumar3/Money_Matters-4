import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero'
import About from './About.jsx'
import Events from './Events.jsx'
import Gallery from './Gallery.jsx'
import Team from './Team.jsx'
import Footer from './Footer.jsx'
import './Styling/Home.css'
import React, { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <div id='home-section' className='main'>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Team />
      <Footer />
    </div>
  );
});

export default Home