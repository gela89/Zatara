import './Navigation.css'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="navigation-cont">
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
        <h4><Link className="navigation" to="/About">ჩვენს შესახებ</Link></h4>
        <h4><Link className="navigation" to="/Kitchen">სამზარეულო</Link></h4>
        <h4><Link className="navigation" to="/Tables">მაგიდები</Link></h4>
        <h4><Link className="navigation" to="/Wardboards">კარადები</Link></h4>
      </div>
    </nav>
  );
}

export default Navigation;