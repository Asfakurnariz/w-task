import React from 'react'
import "./Banner.css";
import DLA from "../assets/DLA_Piper.svg.png";
import Ever from "../assets/Ever.png";
import Fisher from "../assets/Firsher.png";
import Melveny from "../assets/O'Melveny.svg.png";
import Ogltree from "../assets/Ogletree.png";
import "./BannerCard";
import BannerCard from './BannerCard';


const Logo = [
    {
        id: "1",
        icon: DLA
    },
    {
        id: "2",
        icon: Ever
    },
    {
        id: "3",
        icon: Fisher
    },
    {
        id: "4",
        icon: Melveny
    },
    {
        id: "5",
        icon: Ogltree
    },
]

function Banner() {
  return (
    <div className='Banner-section'>
        <div className='banner-details'>
            <h3>Relied on by 10,000+ low firms</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, consequuntur! Quasi <br /> nisi numquam repellendus expedita delectus sequi dolore!</p>
        </div>    
        <div className='spo-logo'>
        {Logo.map((logo) => (
          <img key={logo.id} src={logo.icon} alt={`Logo ${logo.id}`} />
        ))}
        </div>
        <BannerCard/>
    </div>
  )
}

export default Banner;
