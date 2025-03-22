import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
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
  )
};

const restaurentCardStyle = {
  backgroundColor:'#f0f0f0',
  color : 'black'
}

const RestaurantCard = (props) => {
  return (
    <div className="resCard" style={restaurentCardStyle}> 
      <center><img className="resImg" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" /></center>
      <center><h3>{props.resName}</h3></center>
      <h4>{props.cuisine}</h4>
      <h4>4.3 Stars</h4>
      <h4>38 mins</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        <RestaurantCard  resName = 'KevinTers' cuisine='Chai aur Tea'/>
        <RestaurantCard  resName = 'Jay Bhavani' cuisine='Biryani , North Indian , Asian'/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return ( 
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);