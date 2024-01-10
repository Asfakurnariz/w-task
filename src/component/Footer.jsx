import React from 'react'
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-section'>
        <div className='footer-content'>
          <div>
            <h2>The Future of <br /> legal AI</h2>
          </div>
          <div className='footer-decs'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ab distinctio! Labore, assumenda totam. Modi! Labore, assumenda totam. Modi!</p>
            <button className='btn-3'>Get Started</button>
          </div>
        </div>
        {/* <hr /> */}
        <hr class="hr-text"/>
        <div className='footer-nav'> 
          <div className='footer-logo'>
            <h2>W</h2>
          </div>
          <div className='footer-nav-list'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className='footer-social'>
          <FaFacebook size={25} color='white'/>
          <IoLogoInstagram size={25} color='white'/>
          <AiFillTwitterCircle size={25} color='white'/>
          

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
