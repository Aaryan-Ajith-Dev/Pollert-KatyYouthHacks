import React from 'react'
import { Icon } from '@iconify/react';


function Intro() {
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
    </div>
  )
}

export default Intro