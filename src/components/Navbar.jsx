import React from 'react'
import { Link } from 'react-router-dom'
import Level from './Level'

function Navbar() {
  const winSize = 737
  return (
    <div className='navbar'>
      <div className='nav-items'>
        <Link to='/' className='nav-item'>Home</Link>
        <Level name='Level' />
        <Link to='/About' className='nav-item'>About Us</Link>
        <Link to='/Donate' className='nav-item'>Donate</Link>
      </div> 
    </div>
    )
}

export default Navbar

// import React from 'react'

// function Navbar() {
//   return (
//     <div className='navbar'>
//       <div className='nav-items'>
//         <div className='nav-item'>Home</div>
//         <div className='nav-item'>Level</div>
//         <div className='nav-item'>About Us</div>
//         <div className='nav-item'>Donate</div>
//       </div>    
//     </div>
//     )
// }

// export default Navbar
