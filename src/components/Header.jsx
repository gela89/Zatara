import "./HeaderStyles.css";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import ScrollImageSlider from "./ScrollImageSlider";

function Header(props) {
  const location = useLocation();
  const presentation = location.pathname === "/";

  return (
    <>
      <header>
        <div className="head-Title">
          <Navigation orders={props.orders} onDelete={props.onDelete} />
        </div>

        {presentation && <ScrollImageSlider />}
      </header>
    </>
  );
}

export default Header;
