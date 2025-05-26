import {LOGO_URL} from '../utils/constant'
// import logo from "../public/Logo";
import { useState } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
  const [btnNameReact , setBtnNameReact] = useState('login');
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logoContainer">
        <Link to='/'>
        <img
          className="logo"
          src={LOGO_URL}
          />
        </Link>
      </div>

      <div className="navItems">
        <ul>
          <li>Online Status: {onlineStatus ? '🚀' : '👩‍🚀'}</li>
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