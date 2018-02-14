import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import './index.css';
import CartItem from '../CartItem';

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <ul>
      {cart.map((item, index) => (
        <li key={shortid.generate()}>
          <CartItem {...item} removeFromCart={() => removeFromCart(index)} />
        </li>
      ))}
    </ul>
    <div className="subTotal">
      <span>subtotal</span>
      <hr />
      <p>
        10x{' '}
        {cart
          .map(item => item.price.installmentValue)
          .reduce((sum, cur) => sum + cur, 0)
          .toLocaleString('pr-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
      </p>
      <p>
        ou{' '}
        {cart
          .map(item => item.price.value)
          .reduce((sum, cur) => sum + cur, 0)
          .toLocaleString('pr-BR', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
        à vista
      </p>
    </div>
  </div>
);

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
