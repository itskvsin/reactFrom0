import {LOGO_URL} from '../utils/constant'
// import logo from "../public/Logo";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnNameReact , setBtnNameReact] = useState('login');
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribe to the store using our selector hook
  const cartItems = useSelector((store) => store.cart.items);

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
          <Link to="/cart"><li className='font-bold'>🛒{cartItems.length}</li></Link>
          <button className='w-8' onClick={() => {
            btnNameReact === 'logout' ? setBtnNameReact('login') : setBtnNameReact('logout');
          }}>{btnNameReact}</button>
          <li className='font-bold'>{ loggedInUser }</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;