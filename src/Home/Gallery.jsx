// import Welcome from './Small components/Welcome'
// import './Styling/Gallery.css'
// import React, { forwardRef } from "react";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <img
//       src='/right.png'
//       className={className}
//       style={{ ...style, width:"20px", display: "block"}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <img
//       src='/left.png'
//       className={className}
//       style={{ ...style, width:"20px", display: "block"}}
//       onClick={onClick}
//     />
//   );
// }

// const Gallery = forwardRef((props, ref) => {
//   const settings = {
//     dots: true,
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     autoplay: true,
//     speed: 2000,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//     nextArrow: <SamplePrevArrow />,
//     prevArrow: <SampleNextArrow />
//   };
//   return (
//     <div id='gallery-section' className='Gallery'>
//       <Welcome text="PHOTO GALLERY" />

//       <div className="outer">
//         <div className="photos">
//           <Slider {...settings}>
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//             <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
//           </Slider>
//         </div>
//       </div>
//     </div>
//   )
// });

// export default Gallery


import Welcome from './Small components/Welcome'
import './Styling/Gallery.css'
import React, { forwardRef } from "react"

const Gallery = forwardRef((props, ref) => {
  return (
    <div id='gallery-section' className='Gallery'>
      <Welcome text="PHOTO GALLERY" />

      <div className="outer">
        <div className="photos">
            <img src="/Gallery/1.jpg" alt="Team Photo" />
            <img src="/Gallery/2.jpg" alt="Team Photo" />
            <img src="/Gallery/3.jpg" alt="Team Photo" />
            <img src="/Gallery/4.jpg" alt="Team Photo" />
            <img src="/Gallery/5.jpg" alt="Team Photo" />
            <img src="/Gallery/6.jpg" alt="Team Photo" />
            <img src="/Gallery/7.jpg" alt="Team Photo" />
            <img src="/Gallery/8.jpg" alt="Team Photo" />
            <img src="/Gallery/9.jpg" alt="Team Photo" />
            <img src="/Gallery/11.jpg" alt="Team Photo" />
            <img src="/Gallery/10.jpg" alt="Team Photo" />
        </div>
      </div>
    </div>
  )
});

export default Gallery