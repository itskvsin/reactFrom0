import {LOGO_URL} from '../utils/constant'
import image from "../public/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src={image}
        />
      </div>

      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;