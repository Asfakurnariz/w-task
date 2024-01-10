import React, { useState } from "react";
import "../App.css";
import image from "../assets/pngwing.com.png";
import "./Header.css";
import { IoMenu } from "react-icons/io5";

function Header() {
    const [showNav, setShowNav] = useState(false);

  const showNavHandle = () => {
    setShowNav(!showNav)
  }

    return (
      <>
        <div className="hero-section">
            <div className="Navbar">
                <div className={`nav-list ul ${showNav && 'active'}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="logo">
                    <h2>W</h2>
                </div>
                <div className="btn">
                    <button className="btn-1">Sign up</button>
                    <button className="btn-2">Log in</button>
                </div>
                <div className="menu-icon">
                <IoMenu size={25} color="white" onClick={showNavHandle} />
                </div>
            </div>
            <div className="content-details">
                <div className="content">
                    <h2 className="content-title">Lorem ipsum dolor sit amet consectetur <br></br> adipisicing elit. Nemo!</h2>
                    <p className="content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, <br /> neque! Quam fugit non minima eligendi.</p>
                    <div className="subs-form">
                        <input type="text" placeholder="Enter your email"/>
                        <button className="btn-2">Request a Demo</button>
                    </div>
                </div>
                <div className="content-img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
        <div className="section-2">
            <h2 className="section-title">Advance Ai tool to create a legal brief like human</h2>
            <p className="section-desc">
            Writing legal brief should be a tedious and time-consuming task that's why
        legal Wizard created an AI-powered solution that makes writing brief feels like
        magic. Our system streamlines the the writting process, eliminate write's block,and
        allow lawyers to write winning briefs faster and more efficiently that ever
        before. Let Legal Wizerd be your secret weapon in the courtroom, and experience the magic for yourselfe
        </p>
        <button className="btn-2">Get started</button>
        </div>
      </>
    )
  }
  
  export default Header;