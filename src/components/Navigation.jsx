import './Navigation.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaUtensils, FaTable, FaBoxes, FaInfoCircle } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import ShoppingPanel from './ShoppingPanel';
import zataralogo from '../img/zataralogo-5.png';

function Navigation({ orders, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const menuRef = useRef();
  const cartRef = useRef();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleCart = () => setCartOpen(prev => !prev);

  const cartCount = orders.length;

  const closeCartOnOutsideClick = (e) => {
    if (cartOpen && cartRef.current && !cartRef.current.contains(e.target)) {
      setCartOpen(false);
    }
  };

  const closeMenuOnOutsideClick = (e) => {
    if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeCartOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeCartOnOutsideClick);
  }, [cartOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', closeMenuOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeMenuOnOutsideClick);
  }, [menuOpen]);

  return (
    <div className="navigation-cont">
      {/* Burger/Menu Toggle */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Logo */}
      <Link className="LogoZatara" to="/">
        <img id="zataralogo" src={zataralogo} alt="ZaTaRa Logo" />
      </Link>

      {/* Menu Links */}
      <div className={`menu-links ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <h4 id='nav-styl-titl'>
          <Link className="navigation" to="/Kitchen">
            <FaUtensils className="nav-icon" /> სამზარეულო
          </Link>
        </h4>
        <h4 id='nav-styl-titl'>
          <Link className="navigation" to="/Tables">
            <FaTable className="nav-icon" /> მაგიდები
          </Link>
        </h4>
        <h4 id='nav-styl-titl'>
          <Link className="navigation" to="/Wardboards">
            <FaBoxes className="nav-icon" /> კარადები
          </Link>
        </h4>
        <h4 id='nav-styl-titl'>
          <Link className="navigation" to="/About">
            <FaInfoCircle className="nav-icon" /> ჩვენს შესახებ
          </Link>
        </h4>
      </div>

      {/* Cart & Shopping Panel */}
      <div className="shopCard-cont">
        <div className="cart-icon-wrapper" onClick={toggleCart}>
          <FaShoppingCart className={`shopCard ${cartOpen ? 'active' : ''}`} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>

        <ShoppingPanel
          orders={orders}
          onDelete={onDelete}
          cardOpen={cartOpen}
          innerRef={cartRef}
          onClose={() => setCartOpen(false)}
        />
      </div>
    </div>
  );
}

export default Navigation;