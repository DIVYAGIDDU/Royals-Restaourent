import React from 'react';

import './Navbar.css';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <img  src='https://thumbs.dreamstime.com/b/cooking-love-round-vector-design-your-logo-emblem-banner-silhouettes-utensils-kitchenware-138548691.jpg' alt="app__logo" />
      </div>
      <h1 style={{color:'blue'}}><em>ROYALS RESTAURENT</em></h1>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="#booktable" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
