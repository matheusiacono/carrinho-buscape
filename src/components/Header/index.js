import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import logo from './logo-buscape.svg';
import menu from './menu-icon.svg';

const Header = ({ counter, openCart }) => (
  <div className="header">
    <img src={logo} alt="logo do buscapé" />
    <div className="open-cart">
      <span className="counter">{counter}</span>
      <button className="open-cart-button" onClick={openCart}>
        <img src={menu} alt="menu" />
      </button>
    </div>
  </div>
);

Header.propTypes = {
  counter: PropTypes.number.isRequired,
  openCart: PropTypes.func.isRequired,
};

export default Header;
