import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
};

const ResultItem = ({
  description,
  id,
  name,
}) => (
  <li id={id}>
    {name ? <div><b>Name</b>: {name}</div> : null}
    {description ? <div><b>Description</b>: {description}</div> : null}
  </li>
);

ResultItem.propTypes = propTypes;
export default ResultItem;
