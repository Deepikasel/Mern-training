import React from 'react'
import {link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="link">
      <Link to='/'>Home</Link>
      <Link to='/Home'></Link>
      <Link to='/services'>Services</Link>
      <Link to='/contact'>Contact</Link>
      </div>
  )
}

export default Navbar