import React from 'react'
import './Styling/Footer.css'

function Footer() {
  return (
    <footer>
      <div class="container">
         <div class="sec aboutus">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem vero, iure est nemo assumenda
               laudantium tempore impedit enim asperiores maxime!</p>
            <ul class="sci">
               <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
               <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
               <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
         </div>
         <div class="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">Events</a></li>
               <li><a href="#">Gallery</a></li>
               <li><a href="#">Team</a></li>
               <li><a href="#">About</a></li>
            </ul>
         </div>
         <div class="sec contact">
            <h2>Contact Us</h2>
            <ul class="info">
               <li>
                  <span><i class="fa-solid fa-location-dot"></i></span>
                  <p><a href="https://www.google.com/maps/dir/Plot+No.+7,+International+Institute+of+Information+Technology,+Naya+Raipur,+Purkhoti+Muktangan,+Sector+24,+Atal+Nagar-Nava+Raipur,+Chhattisgarh/Plot+No.+7,+near+Purkhoti+Muktangan,+Sector+24,+Atal+Nagar-Nava+Raipur,+Uparwara,+Chhattisgarh+493661/@21.1284594,81.72488,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3a28c434ac2ae871:0x4e3568497a7e1d7e!2m2!1d81.7661654!2d21.1284644!1m5!1m1!1s0x3a28c434ac2ae871:0x4e3568497a7e1d7e!2m2!1d81.7661654!2d21.1284644?entry=ttu" target="_blank">IIIT Naya Raipur,Chattisgarh</a></p>
               </li>
               <li>
                  <span><i class="fa-solid fa-envelope"></i></span>
                  <p><a href="mailto:moneymatters@iiitnr.edu.in">moneymatters@iiitnr.edu.in</a></p>
               </li>
            </ul>
         </div>
      </div>
   </footer>
  )
}

export default Footer