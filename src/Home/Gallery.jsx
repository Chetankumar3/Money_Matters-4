import Welcome from './Small components/Welcome'
import './Styling/Gallery.css'
import React, { forwardRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src='/right.png'
      className={className}
      style={{ ...style, width:"20px", display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src='/left.png'
      className={className}
      style={{ ...style, width:"20px", display: "block"}}
      onClick={onClick}
    />
  );
}

const Gallery = forwardRef((props, ref) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div id='gallery-section' className='Gallery'>
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
});

export default Gallery