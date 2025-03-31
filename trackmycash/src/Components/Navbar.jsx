import React, { useEffect } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  },[location]);
  return (
    <nav className='navbar'>
      <h1 className='logo'>TrackMyCash</h1>
      <ul className='nav-links'>
        <li className={location.pathname==="/"? "active": ""}>
          <Link to={"/"}>📊 Dashboard</Link>
        </li>
        <li className={location.pathname==="/transaction"? "active": ""}>
          <Link to={"/transaction"}>📄 Transaction</Link>
        </li>
        <li className={location.pathname==="/report"? "active": ""}>
          <Link to={"/report"}>⌛ Report</Link>
        </li>
        <li>
          <Link to={"/"}>💡 Get Quote</Link>
        </li>
        <li>
          <Link to={"/"}>🔄️ Reset</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar