import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Level5() {
  const [showAlternateContent, setShowAlternateContent] = useState(false);

  const toggleContent = () => {
    setShowAlternateContent(!showAlternateContent);
  };

  const containerVariants = {
    hidden: { height: '0' },
    visible: { height: 'auto',  transition: { duration: 0.5 } },
  };
  

  return (
    <div className='header4' style={{backgroundImage:"url('https://images.unsplash.com/photo-1606994868513-d480e1a1cab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9sbHV0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60", display:"flex"}}>
      <div>
        <h1 className='lvl-head' style={{lineHeight:"1"}}>Air Quality: Very<br/> Unhealthy</h1>
        <h5 className='lvl-desc'> The air quality is classified as very unhealthy, and everyone may experience more serious health effects. Sensitive groups are at even higher risk of experiencing severe symptoms. </h5>
      </div>

      <div className='level-box' style={{width:"32%"}}>
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
              ? ' The general population is likely to experience significant health effects, including aggravated symptoms of respiratory and cardiovascular conditions, such as increased coughing, difficulty breathing, and reduced lung function. Sensitive individuals may experience even more severe symptoms. '
              : " Sensitive groups should avoid outdoor activities as much as possible. The general population is advised to minimize outdoor activities and take protective measures, such as staying indoors and using air purifiers. "}
          </h5>
        </motion.div>
      </div>
    </div>
  )
}

export default Level5;
