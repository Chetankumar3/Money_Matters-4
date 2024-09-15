// import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Welcome from "./Small components/Welcome.jsx";
import Sub from "./Small components/sub.jsx";
import Button from "./Navbar/Button.jsx";
import "./Styling/Hero.css";
import About from "./About.jsx";
import React, { useRef } from "react";

function Hero() {
  const sectionRef = useRef(null);

  // Function to scroll to the section on button click
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="mainn">
      {/* <Navbar /> */}
      <div className="hero">
        <div className="text">
          <div className="wel">
            Welcome to<h1 className="nameclub">MONEY MATTERS</h1>
          </div>
          <div className="iiit">The Financial Club Of IIIT Naya Raipur</div>
          <div className="quote">
            Where <span className="green"> Education</span> Meets{" "}
            <span className="green">Financial Empowerment</span>
          </div>
          <div className="collab">IN COLLABORATION WITH</div>
          {/* <div className="outerzerodha"> */}
          <img src="public\Zerodha_logo_1.png" alt="" className="zerodha" />
          {/* </div> */}
        </div>
        <img src="/bgg.png" alt="" className="theme" />
        <button onClick={scrollToSection} className="explore">
          {/* <Button url="/About"/> */}
          <img src="/explore.png" alt="" />
        </button>
      </div>
      <About ref={sectionRef} />
    </div>
  );
}

export default Hero;
