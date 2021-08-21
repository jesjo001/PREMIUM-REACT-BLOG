import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = (props) => {
return(
  <nav className="navbar">
    <h1> The Premium Blog</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
    </div>
  </nav>
  )
}
export default Navbar
