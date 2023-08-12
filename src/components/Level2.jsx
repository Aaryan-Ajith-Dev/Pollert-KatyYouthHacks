import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Level2() {
  const [showAlternateContent, setShowAlternateContent] = useState(false);

  const toggleContent = () => {
    setShowAlternateContent(!showAlternateContent);
  };

  const containerVariants = {
    hidden: { height: '0' },
    visible: { height: 'auto',  transition: { duration: 0.5 } },
  };
  

  return (
    <div className='header4' style={{backgroundImage:"url('https://images.unsplash.com/photo-1660463529933-1d0f6fcfce1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fE5vcm1hbCUyMCUyMGFjdGl2aXRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60", display:"flex",}}>
      <div>
        <h1 className='lvl-head'>Air Quality: Moderate </h1>
        <h5 className='lvl-desc'> The air quality is acceptable, but there might be a moderate health concern for a small number of people who are unusually sensitive to air pollution. The majority of the general population is not likely to be affected. </h5>
      </div>

      <div className='level-box'>
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
              ? ' For most people, the air quality poses no significant risk, and outdoor activities can be conducted without major health concerns. However, individuals who are particularly sensitive to air pollution, such as those with respiratory or cardiovascular conditions, might experience minor discomfort or irritation. '
              : " People in sensitive groups may consider reducing prolonged outdoor exertion, especially if they experience symptoms like coughing, throat irritation, or shortness of breath. The general population can continue their normal activities. "}
          </h5>
        </motion.div>
      </div>
    </div>
  )
}

export default Level2;
