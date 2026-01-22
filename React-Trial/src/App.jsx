 import React, { useState } from 'react'
import User from './components/User'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import State from './hooks/State'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Effect from './hooks/Effect'

const App = () => {
  const [count,setcount]=useState(0);
  const change=()=>{
    setcount(count+1);
  }
  return (
    <>
    <h1>count {count}</h1>
      <button onClick={change}>increase</button>
      <User 
        name="ronaldo" 
        department="cse" 
        skills={["c", "c++", "java", "Mern", "python"]} 
        values={[1, 2, 3, 4, 5]} 
      />
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/state" element={<State />} />
          <Route path="/About" element={<About />} />
             <Route path="/Contact" element={<Contact />} />
             <Route path="/Effect" element={<Effect />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
 

