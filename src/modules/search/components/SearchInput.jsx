import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

const SearchInput = ({
  onSubmit,
  placeholder = 'Search for a product.',
}) => (
  <form onSubmit={onSubmit}>
    <input type='text' placeholder={placeholder}/>
    <button type='submit'>Search</button>
  </form>
);

SearchInput.propTypes = propTypes;
export default SearchInput;
