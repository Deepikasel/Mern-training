import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
const App = () => {
  return (
 <>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/service" element={<Service/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path='/products' element={<Products/>}></Route>
  <Route path='/products/:id' element={<ProductDetails/>}></Route>

 </Routes>
   <div>App</div>
   
 </>
  )
}

export default App
