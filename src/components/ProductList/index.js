import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './index.css';
import Product from '../Product';

const ProductList = ({ products }) => (
  <div className="product-list">
    <ul>
      {products.map(product => (
        <li key={shortid.generate()}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
