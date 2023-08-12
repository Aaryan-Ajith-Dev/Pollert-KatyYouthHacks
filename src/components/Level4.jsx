import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Level4() {
  const [showAlternateContent, setShowAlternateContent] = useState(false);

  const toggleContent = () => {
    setShowAlternateContent(!showAlternateContent);
  };

  const containerVariants = {
    hidden: { height: '0' },
    visible: { height: 'auto',  transition: { duration: 0.5 } },
  };
  

  return (
    <div className='header4' style={{backgroundImage:"url('https://images.unsplash.com/photo-1579519772836-2732b96a6306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBvbGx1dGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60", display:"flex"}}>
      <div>
        <h1 className='lvl-head'>Air Quality: Unhealthy  </h1>
        <h5 className='lvl-desc'> The air quality is considered unhealthy, and everyone might begin to experience health effects. Sensitive groups might experience more serious effects than the general population. </h5>
      </div>

      <div className='level-box' style={{width:"34%"}} >
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
              ? ' The general population might start to experience symptoms such as coughing, throat irritation, shortness of breath, or worsened preexisting health conditions. Sensitive individuals (those with respiratory or cardiovascular conditions, children, and older adults) might experience more severe symptoms. '
              : " Sensitive groups should avoid prolonged or heavy outdoor exertion. The general population might need to reduce outdoor activities, especially if they experience symptoms. "}
          </h5>
        </motion.div>
      </div>
    </div>
  )
}

export default Level4;
