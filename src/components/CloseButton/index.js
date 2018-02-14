import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const CloseButton = ({ onClick }) => (
  <button type="button" className="close-button" onClick={onClick} />
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
