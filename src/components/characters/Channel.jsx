import React from 'react';
import PropTypes from 'prop-types';

const Channel = ({ title }) => (
  <div>
    <span>{title}</span>
  </div>
);

Channel.propTypes = {
  title: PropTypes.string.isRequired
};

export default Channel;