import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


function Intro() {

  const [aqi, setAQI] = useState(100) //for trial used 100, assign it to null
  let to = '';
  let state = null;
  if (aqi === null) {
    state = null
  }
  else if (aqi <= 50) {
    to = '/level-1';
    state = 'Good'
  }
  else if (aqi <= 100) {
    to = '/level-2';
    state = 'Ok'    
  }
  else if (aqi <= 150) {
    to = '/level-3';
    state = 'Unhealthy for Sensitive Groups'    
  }
  else if (aqi <= 200) {
    to = '/level-4';
    state = 'Unhealthy'    
  }
  else if (aqi <= 300) {
    to = '/level-5';
    state = 'Very Unhealthy'    
  }
  else {
    to = '/level-6'
    state = 'Hazardous'
  }
  return (
    <div className="header"style={{backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60')"}}>
        <h1>Pollert </h1>
        <h2> 
an polished approach to reduce pollution from our planet</h2>
        <div className='search-box'>
            <input type='text' className='search-text'></input>
            <div>
            <Icon icon="ion:search" color="white" style={{transform:"rotate(90deg)"}} />
            </div>
        </div>
      
      {/*After inserting shashank's part : aqi stores the AQI*/}
      {<Link to={to}>{state}</Link>}
    </div>
  )
}

export default Intro

// import React from 'react'
// import { Icon } from '@iconify/react';


// function Intro() {
//   return (
//     <div className="header"style={{backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60')"}}>
//         <h1>Pollert </h1>
//         <h2> 
// an polished approach to reduce pollution from our planet</h2>
//         <div className='search-box'>
//             <input type='text' className='search-text'></input>
//             <div>
//             <Icon icon="ion:search" color="white" style={{transform:"rotate(90deg)"}} />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Intro
