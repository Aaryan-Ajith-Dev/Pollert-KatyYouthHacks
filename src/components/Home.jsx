import React from 'react'
import { Intro,Intropg2,About,Donate,Navbar } from './index'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Intro/>
      <Intropg2/>
      <About/>
      <Donate/>
    </div>
  )
}

export default Home