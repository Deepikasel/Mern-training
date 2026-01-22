
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="link">
      <Link to='/'>Home</Link><br/>
      <Link to='/About'>About</Link><br/>
      <Link to='/Contact'>Contact</Link><br/>
      <Link to='State'>State</Link><br/>
      <Link to='Effect'>Effect</Link>
      </div>
  )
}

export default Navbar