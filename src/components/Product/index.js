import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import heart from './heart.svg';
import Gallery from '../Gallery';

const Product = ({ images, name, price }) => (
  <div className="product">
    <Gallery images={images} name={name} />
    <div className="product-display">
      <p className="product-display-name">
        {name} <img src={heart} alt="favorito" className="heart" />
      </p>
      <hr />
      <div className="best-price-tag">
        <span>
          <button>Melhor Preço</button>
        </span>
      </div>
      <div className="price">
        <p className="installment money">
          {`${price.installments}x R$ `}
          <strong>
            {`${price.installmentValue.toLocaleString('pr-BR', {
              minimumFractionDigits: 2,
            })}`}
          </strong>
        </p>
        <p className="value">
          ou{' '}
          <span className="money">
            {`${price.value.toLocaleString('pr-BR', {
              style: 'currency',
              currency: 'BRL',
            })}`}
          </span>{' '}
          à vista
        </p>
      </div>
      <button className="add-to-cart">
        Adicionar ao Carrinho <span className="caret" />
      </button>
    </div>
  </div>
);

Product.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.shape({
    installments: PropTypes.number,
    installmentValue: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
};

export default Product;
