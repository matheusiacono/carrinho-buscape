import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import Gallery from '../Gallery';

const Product = ({ images, name }) => (
  <div className="product">
    <Gallery images={images} name={name} />
    <span>{name}</span>
  </div>
);

Product.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;
