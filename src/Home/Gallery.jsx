import React from 'react'
import Welcome from './Small components/Welcome'
import './Styling/Gallery.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className='Gallery'>
      <Welcome text="GALLERY" />

      <div className="outer">
        <div className="photos">
          <Slider {...settings}>
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Gallery