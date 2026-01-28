import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import State from './hooks/State'
import Form from './hooks/Form'
import Profile from './components/Profile'
  import Reducer from './hooks/Reducer'
  import { createContext } from 'react'
  export const userContext=createContext()
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
< Route path="/form" element={<Form/>}/>
< Route path="/state" element={<State/>}/>
< Route path="/profile" element={<Profile/>}/>
< Route path="/reducer" element={<Reducer/>}/>
 </Routes>
 <div>App</div>
 </>
  )
}

export default App
