import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const navigate = useNavigate();

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://quotes-api-self.vercel.app/quote');
      const data = await response.json();
      console.log(data);
      setQuote(data.quote);
      setAuthor(data.author);
      setIsModelOpen(true);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(location);
  },[location]);

  function handleReset() {
    localStorage.clear();
    navigate("/")
  }

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
          <div className="quote-btn" onClick={fetchQuote}>💡 Get Quote</div>
        </li>
        <li>
          <div className='reset-btn' onClick={handleReset}>🔄️ Reset</div>
        </li>
      </ul>
      {
        isModelOpen && (
          <div className='model-overlay'>
            <div className='model-content'>
              <p>{quote}</p>
              <p>by <strong>{author}</strong></p>
              <button className='cls-btn' onClick={() => setIsModelOpen(false)}>Close</button>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar