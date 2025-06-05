import './HeaderStyles.css';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

function Header(props) {
  const location = useLocation();
  const presentation = location.pathname === "/";

  return (
    <>
      <div className="head-Title">
        <Navigation orders={props.orders} onDelete={props.onDelete} />
      </div>

      <header>
        <div className={presentation ? 'Home-page' : null}></div>
      </header>
    </>
  );
}

export default Header;