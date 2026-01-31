import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="bg-gray-700 px-6 py-4">
        <ul className="">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/service'>Service</Link></li>
        </ul>
    </div>
  )
}

export default Navbar