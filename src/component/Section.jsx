import React from 'react';
import "./Section.css";
import FirstImage from "../assets/Pic1.png";
import SecImage from "../assets/pic2.png";
import ThirdImage from "../assets/pic3.png";


function Section() {
  return (
    <div className='container-section'>
        <div className='Section'>
        <div className='card'>
            <div className='card-details'>
                <h2>Our cool Steps <br /> to find right the answer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, natus cupiditate iusto obcaecati aliquid doloremque neque odio possimus explicabo, delectus alias mollitia sapiente atque eveniet numquam? Unde, animi. Atque, vero.</p>
                <button className='btn-2'>Get Started</button>

            </div>
            <div className='card-img'>
                <img src={FirstImage} alt="" />
            </div>
        </div>

        <div className='card'>
            <div className='card-img'>
                <img src={SecImage} alt="" />
            </div>
            <div className='card-details'>
                <h2>Our cool Steps <br /> to find right the answer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, natus cupiditate iusto obcaecati aliquid doloremque neque odio possimus explicabo, delectus alias mollitia sapiente atque eveniet numquam? Unde, animi. Atque, vero.</p>
                <button className='btn-2'>Get Started</button>

            </div>
        </div>

        <div className='card'>
            <div className='card-details'>
                <h2>Our cool Steps <br /> to find right the answer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, natus cupiditate iusto obcaecati aliquid doloremque neque odio possimus explicabo, delectus alias mollitia sapiente atque eveniet numquam? Unde, animi. Atque, vero. </p>
                <button className='btn-2'>Get Started</button>

            </div>
            <div className='card-img'>
                <img src={ThirdImage} alt="" />
            </div>
        </div>
        </div>

    </div>
  )
}

export default Section;
