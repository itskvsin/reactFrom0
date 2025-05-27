import {LOGO_URL} from '../utils/constant'
// import logo from "../public/Logo";
import { useState } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
  const [btnNameReact , setBtnNameReact] = useState('login');
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center px-10 shadow-lg w-4/4 sticky top-0">
      <div className="logoContainer hidden sm:block">
        <Link to='/'>
        <img
          className="logo w-20 hidden sm:block "
          src={LOGO_URL}
          />
        </Link>
      </div>

      <div className="navItems">
        <ul className='flex flex-col gap-10 sm:flex-row'>
          <li>Online Status: {onlineStatus ? '🚀' : '👩‍🚀'}</li>
          <Link to="/"> <li>Home</li> </Link>  
          <Link to="/about"> <li>About Us</li> </Link>  
          <Link to="/grocery"> <li>Grocery</li> </Link>
          <Link to="/contact"> <li>Contact Us</li> </Link>
          <li>Cart</li>
          <button className='w-8' onClick={() => {
            btnNameReact === 'logout' ? setBtnNameReact('login') : setBtnNameReact('logout');
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;