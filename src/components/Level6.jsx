import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Level6() {
  const [showAlternateContent, setShowAlternateContent] = useState(false);

  const toggleContent = () => {
    setShowAlternateContent(!showAlternateContent);
  };

  const containerVariants = {
    hidden: { height: '0' },
    visible: { height: 'auto',  transition: { duration: 0.5 } },
  };
  

  return (
    <div className='header4' style={{backgroundImage:"url('https://images.unsplash.com/photo-1607258120949-a325de37c631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwb2xsdXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60", display:"flex"}}>
      <div>
        <h1 className='lvl-head'>Air Quality: Hazardous </h1>
        <h5 className='lvl-desc'>  The air quality is classified as hazardous, and the entire population may experience serious health effects. Everyone is at risk of adverse health impacts due to the high levels of air pollution. </h5>
      </div>

      <div className='level-box' style={{width:"36%"}}>
        <div className={`control-box ${showAlternateContent ? 'active' : ''}`} onClick={toggleContent}>
          {showAlternateContent ? 'Health Impact' : 'Recommended Actions'}
        </div>

        <motion.div className={`lvl-box ${showAlternateContent ? 'active' : ''}`}
        variants={containerVariants} 
        key={showAlternateContent ? 'health' : 'recommended'}
        initial="hidden" 
        animate={"visible"}>
          <h5 className='lvl-txt'>
            <br/>
            {showAlternateContent
              ? ' The general population is likely to experience severe symptoms, including respiratory and cardiovascular effects. Sensitive groups are at an even higher risk of life-threatening health effects. '
              : " Everyone should avoid outdoor activities and stay indoors as much as possible. Sensitive groups should take extreme precautions to minimize exposure. It's advisable to use air purifiers and seek medical attention if symptoms worsen. "}
          </h5>
        </motion.div>
      </div>
    </div>
  )
}

export default Level6;
