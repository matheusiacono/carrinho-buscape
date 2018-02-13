import React from 'react';
import PropTypes from 'prop-types';

import menu from './menu-icon.svg';
import './index.css';

const OpenCartButton = ({ openCart }) => (
  <button className="open-cart-button" onClick={openCart}>
    <img src={menu} alt="menu" />
  </button>
);

OpenCartButton.propTypes = {
  openCart: PropTypes.func.isRequired,
};

export default OpenCartButton;
