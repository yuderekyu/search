import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
};

const ResultItem = ({
  id,
  name,
}) => (
  <li id={id}>
    {name}
  </li>
);

ResultItem.propTypes = propTypes;
export default ResultItem;
