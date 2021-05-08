import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

const SearchInput = ({
  onChange,
  onSubmit,
  placeholder = 'Search for a product.',
}) => (
  <form onSubmit={onSubmit}>
    <input
      type='text'
      placeholder={placeholder}
      onChange={onChange}
    />
    <button type='submit'>
      Search
    </button>
  </form>
);

SearchInput.propTypes = propTypes;
export default SearchInput;
