import {LOGO_URL} from '../utils/constant'
import image from "../public/logo.png";
import { useState } from 'react';

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
          <a href='/'> <li>Home</li> </a> 
          <a href='/about'> <li>About Us</li> </a> 
          <a href='/contact'> <li>Contact Us</li> </a> 
          <a href='#'> <li>Cart</li> </a> 
          <button onClick={() => {
            btnNameReact === 'logout' ? setBtnNameReact('login') : setBtnNameReact('logout');
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;