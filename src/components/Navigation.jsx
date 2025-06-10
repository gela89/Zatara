import './Navigation.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import Order from './Order';
import zataralogo from '../img/zataralogo-2.png'

function ShowOrder({ orders, onDelete }) {
  return (
    <div className="ShowOrder">
      {orders.map((el, id) => (
        <Order key={id} elements={el} onDelete={onDelete} />
      ))}
    </div>
  );
}

function EmrtyOrder() {
  return (
    <div className="emprty">
      <h2>Shop Box Empty!</h2>
    </div>
  );
}

function Navigation({ orders, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleCart = () => setCardOpen(prev => !prev);

  return (
    <div className="navigation-cont">

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <Link className="LogoZatara" to='/'>
        <img src={zataralogo}  alt="Logo"/>
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
        {cardOpen && (
          <div>
            {orders.length > 0 ? (
              <ShowOrder orders={orders} onDelete={onDelete} />
            ) : (
              <EmrtyOrder />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;