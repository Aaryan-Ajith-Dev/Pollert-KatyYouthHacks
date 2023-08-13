import React from 'react'
import { Link } from 'react-router-dom'
import Level from './Level'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-items'>
        <Link to='/' className='nav-item'>Home</Link>
        <Level name='Levels' className='nav-item'/>
        <a className='nav-item' href='/#About'>About Us</a>
        <a className='nav-item' href='/#Donate'>Donate</a>
      </div>
    </div>
    )
}

export default Navbar

