import React from 'react'
import poo from '../assets/poo.jpg'
import '../CssComponents/HeroSection.css'

function HeroSection() {
  return (
    <div>
        <div className='container'>
            <img src={poo} alt="No Image" className='profile-pic' id='home' />
            <h2>POOJA BENAKATTI</h2>
            <h4>COMPUTER SCIENCE ENGINEERING</h4>
            <h5>FULL STACK DEVELOPER.</h5>
        </div>
    </div>
  )
}

export default HeroSection