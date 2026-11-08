import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Policy from './component/Policy';
import Error from './component/Error';
import List from './component/List';
import { Routes ,Route } from 'react-router-dom';

const App=()=>{
  return(
    <>
    <List/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/policy' element={<Policy/>} />
    <Route element={<Error/>} />
    </Routes>
    </>
  )
}

export default App;