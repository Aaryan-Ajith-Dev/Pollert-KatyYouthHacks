import React from "react";
import {Home,P1,P2,P3} from './components/index.js';
import { Route, Routes } from "react-router-dom";
const App = () => {

  return (
    <>    
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/good' element={<P1/>} />
        <Route path='/ok' element={<P2/>} />
        <Route path='/bad' element={<P3/>} />
      </Routes>
    </>
  );
};

export default App


