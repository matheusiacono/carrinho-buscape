import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import logo from './logo-buscape.svg';
import OpenCartButton from '../OpenCartButton';
import Cart from '../Cart';

const Header = ({
  cart, openCart, showCart, removeFromCart,
}) => (
  <div className="header">
    <img src={logo} alt="logo do buscapé" />
    <div className="open-cart">
      <span className="counter">{cart.length}</span>
      <OpenCartButton openCart={openCart} />
    </div>
    {showCart ? <Cart cart={cart} removeFromCart={removeFromCart} /> : null}
  </div>
);

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  openCart: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Header;
