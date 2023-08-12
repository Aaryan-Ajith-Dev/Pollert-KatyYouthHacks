import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Level1() {
  const [showAlternateContent, setShowAlternateContent] = useState(false);

  const toggleContent = () => {
    setShowAlternateContent(!showAlternateContent);
  };

  const containerVariants = {
    hidden: { height: '0'  },
    visible: { height: 'auto', border:"1px solid black", transition: { duration: 0.5 } },
  };
  

  return (
    <div className='header4' style={{backgroundImage:"url('https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWx0aHklMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60)", display:"flex"}}>
      <div>
        <h1 className='lvl-head'>Air Quality: Good</h1>
        <h5 className='lvl-desc'>The air quality is considered satisfactory, and the air pollution levels pose little to no risk to human health. It's the best category on the AQI scale, indicating that the air is clean and contains minimal pollutants.</h5>
      </div>

      <div className='level-box'>
        <div className={`control-box ${showAlternateContent ? 'active' : ''}`} onClick={toggleContent}>
          {showAlternateContent ? 'Health Impact' : 'Recommended Actions'}
        </div>

        <motion.div className={`lvl-box ${showAlternateContent ? 'active' : ''}`}
        variants={containerVariants} 
        key={showAlternateContent ? 'health' : 'recommended'}
        initial= {"hidden"} 
        animate={"visible"}>
          <h5 className='lvl-txt'>
            <br/>
            {showAlternateContent
              ? 'People can engage in outdoor activities and exercise without concerns related to air quality. Individuals with respiratory or cardiovascular conditions, as well as children and the elderly, can usually go about their usual activities without any adverse effects.'
              : " No special actions are required for the general population. It's a good time to enjoy outdoor activities, and outdoor air quality is unlikely to have any negative health impacts"}
          </h5>
        </motion.div>
      </div>
    </div>
  )
}

export default Level1;
