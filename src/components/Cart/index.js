import React from 'react';
import shortid from 'shortid';

import './index.css';
import CartItem from '../CartItem';

const Cart = () => (
  <div className="cart">
    <ul>
      {[0, 1].map(() => (
        <li key={shortid.generate()}>
          <CartItem />
        </li>
      ))}
    </ul>
    <hr />
  </div>
);

export default Cart;
