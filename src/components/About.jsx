import React, { useState } from 'react';
import { skybg } from "../assets";


function About() {
  const [isAboutPageOpen, setIsAboutPageOpen] = useState(false);

  const handleAboutClick = () => {
    setIsAboutPageOpen(true);
  };
  return (
    <div className="header" style={{backgroundImage: `url(${skybg})`, color:"black"}}>
      <h1 className='heading'>About Us</h1>
      <p style={{width:"32%", fontSize:"1em",lineHeight:"1.2"}}>At Pollert, we envision a world where clean air is a fundamental right, and where people are educated and equipped to tackle pollution head-on. We strive to be the go-to platform for reliable pollution level data, actionable tips, and meaningful initiatives that drive<br/> positive change.</p>
      <div className='about-box' onClick={handleAboutClick}>What we serve      </div>
      {isAboutPageOpen && (
        <div>
          <h2 className="abt1">Pollution Level Data</h2>
          <h2 className="abt2">Pollution Reduction Tips</h2>
          <h2 className="abt3">Plant Trees for Cleaner Air</h2>
        </div>
      )} 

    
    
    </div>
  )
}

export default About