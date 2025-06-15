import './Navigation.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
//import Order from './Order';
import ShoppingPanel from './ShoppingPanel'
import zataralogo from '../img/zataralogo-4.png'
import { useRef, useEffect } from 'react';



function Navigation({ orders, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const cartRef = useRef();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleCart = () => setCardOpen(prev => !prev);

  useEffect(() => {
    function handleClickOutside(e) {
      if (cardOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        setCardOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cardOpen]);

  return (
    <div className="navigation-cont">
      {/* მენიუ და ლოგო */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <Link className="LogoZatara" to='/'>
        <img id="zataralogo" src={zataralogo} alt="Logo" />
      </Link>

      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
        <h4><Link className="navigation" to="/About">ჩვენს შესახებ</Link></h4>
        <h4><Link className="navigation" to="/Kitchen">სამზარეულო</Link></h4>
        <h4><Link className="navigation" to="/Tables">მაგიდები</Link></h4>
        <h4><Link className="navigation" to="/Wardboards">კარადები</Link></h4>
      </div>

      <div className="shopCard-cont">
        <FaShoppingCart
          onClick={toggleCart}
          className={`shopCard ${cardOpen ? 'active' : ''}`}
        />
        <ShoppingPanel
          orders={orders}
          onDelete={onDelete}
          cardOpen={cardOpen}
          innerRef={cartRef}
        />
      </div>
    </div>
  );
}

export default Navigation;