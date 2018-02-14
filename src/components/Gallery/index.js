import React, { Component } from 'react';
import ReactImageFallback from 'react-image-fallback';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './index.css';
import defaultImage from './default-image.jpg';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.images[0],
    };
  }
  changeImage(newImg) {
    if (newImg !== this.state.image) {
      this.setState({ image: newImg });
    }
  }
  render() {
    return (
      <div className="gallery">
        <div className="gallery-itens">
          {this.props.images.map(image => (
            <div
              className="gallery-item"
              onClick={() => this.changeImage(image)}
              onKeyPress={() => this.changeImage(image)}
              role="button"
              tabIndex={0}
              key={shortid.generate()}
            >
              <ReactImageFallback src={image} fallbackImage={defaultImage} />
            </div>
          ))}
        </div>
        <div className="gallery-display">
          <ReactImageFallback
            src={this.state.image}
            fallbackImage={defaultImage}
            alt={this.props.name}
          />
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

export default Gallery;
