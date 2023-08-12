import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Level3() {
  const [showAlternateContent, setShowAlternateContent] = useState(false);

  const toggleContent = () => {
    setShowAlternateContent(!showAlternateContent);
  };

  const containerVariants = {
    hidden: { height: '0' },
    visible: { height: 'auto',  transition: { duration: 0.5 } },
  };
  

  return (
    <div className='header4' style={{backgroundImage:"url('https://images.unsplash.com/photo-1489440543286-a69330151c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aHklMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60", display:"flex"}}>
      <div>
        <h1 className='lvl-head' style={{lineHeight:"1"}}>Air Quality: Unhealthy<br/> for Sensitive Groups </h1>
        <h5 className='lvl-desc'> While the general population is not likely to be affected, people in sensitive groups, such as those with respiratory or cardiovascular conditions, children, and older adults, might experience health effects. The air quality is considered acceptable overall but poses a greater risk to the sensitive population. </h5>
      </div>

      <div className='level-box' style={{width:"58%"}}>
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
              ? ' Sensitive individuals might experience symptoms such as coughing, throat irritation, shortness of breath, or worsening of preexisting health conditions. The general population is less likely to be affected and can continue outdoor activities with caution. '
              : " People in sensitive groups should consider reducing prolonged or heavy outdoor exertion, especially if they experience symptoms. The general population can usually engage in outdoor activities with minor adjustments. "}
          </h5>
        </motion.div>
      </div>
    </div>
  )
}

export default Level3;
