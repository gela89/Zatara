import "./HeaderStyles.css";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import ScrollImageSlider from "./ScrollImageSlider";

function Header({ orders, onDelete }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="site-header">
      <div className="navigation-wrapper">
        <Navigation orders={orders} onDelete={onDelete} />
      </div>
      {isHomePage && <ScrollImageSlider />}
    </header>
  );
}

export default Header;