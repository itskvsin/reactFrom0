import {LOGO_URL} from '../utils/constant'
// import logo from "../public/Logo";
import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [btnNameReact , setBtnNameReact] = useState('login');

  return (
    <div className="header">
      <div className="logoContainer">
        <a href='/'>
        <img
          className="logo"
          src={LOGO_URL}
          />
        </a>
      </div>

      <div className="navItems">
        <ul>
          <Link to="/"> <li>Home</li> </Link>  
          <Link to="/about"> <li>About Us</li> </Link>  
          <Link to="/contact"> <li>Contact Us</li> </Link>
          <li>Cart</li>
          <button onClick={() => {
            btnNameReact === 'logout' ? setBtnNameReact('login') : setBtnNameReact('logout');
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;