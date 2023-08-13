import React from "react";
import { Route,Routes } from "react-router-dom";
import { Level1,Level2,Level3,Level4,Level5,Level6,About,Donate,Navbar, Intro } from './components/index.js'
import Home from './components/Home.jsx'

function App(){
    return(
        <>
            <Navbar />
            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/level-1' element={<Level1 />} />
                <Route path='/level-2' element={<Level2 />} />
                <Route path='/level-3' element={<Level3 />} />
                <Route path='/level-5' element={<Level5 />} />
                <Route path='/level-4' element={<Level4 />} />
                <Route path='/level-6' element={<Level6 />} />
            </Routes>
        </>
    )    
}

export default App;


// import React from 'react'
// import { Intro,Intropg2,About,Donate } from './components'

// function App() {
//   return (
//     <div>
//       <Intro/>
//       <Intropg2/>
//       <About/>
//       <Donate/>
//     </div>
//   )
// }

// export default App
