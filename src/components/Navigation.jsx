import './Navigation.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import ShoppingPanel from './ShoppingPanel'
import zataralogo from '../img/zataralogo-5.png'

function Navigation({ orders, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  const cartRef = useRef();
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleCart = () => setCardOpen(prev => !prev);

  const cartCount = orders.length;

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

  useEffect(() => {
    function handleClickOutsideMenu(e) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, [menuOpen]);

  const HandleCloseOrder = () => {
    setCardOpen(false);
  }

  return (
    <div className="navigation-cont">
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <Link className="LogoZatara" to='/'>
        <img id="zataralogo" src={zataralogo} alt="Logo" />
      </Link>

      <div className={`menu-links ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <h4 id='nav-styl-titl'><Link className="navigation" to="/About">ჩვენს შესახებ</Link></h4>
        <h4 id='nav-styl-titl'><Link className="navigation" to="/Kitchen">სამზარეულო</Link></h4>
        <h4 id='nav-styl-titl'><Link className="navigation" to="/Tables">მაგიდები</Link></h4>
        <h4 id='nav-styl-titl'><Link className="navigation" to="/Wardboards">კარადები</Link></h4>
      </div>

      <div className="shopCard-cont">
        <div className="cart-icon-wrapper" onClick={toggleCart}>
          <FaShoppingCart className={`shopCard ${cardOpen ? 'active' : ''}`} />
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>

        <ShoppingPanel
          orders={orders}
          onDelete={onDelete}
          cardOpen={cardOpen}
          innerRef={cartRef}
          onClose={HandleCloseOrder}
        />
      </div>
    </div>
  );
}

export default Navigation;