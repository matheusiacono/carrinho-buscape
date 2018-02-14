import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';

import './index.css';
import defaultImage from '../Gallery/default-image.jpg';
import CloseButton from '../CloseButton';

const CartItem = ({
  image, name, price, removeFromCart,
}) => (
  <div className="cart-item">
    <ReactImageFallback src={image} fallbackImage={defaultImage} alt={name} />
    <div className="cart-item-details">
      <p className="cart-item-name">{name}</p>
      <p>
        {`${price.installments}x ${price.installmentValue.toLocaleString('pr-BR', {
          style: 'currency',
          currency: 'BRL',
        })}`}
      </p>
      <p>
        {`ou ${price.value.toLocaleString('pr-BR', {
          style: 'currency',
          currency: 'BRL',
        })} à vista`}
      </p>
    </div>
    <CloseButton onClick={() => removeFromCart()} />
  </div>
);

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.shape({
    value: PropTypes.number,
    installments: PropTypes.number,
    installmentValue: PropTypes.number,
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
