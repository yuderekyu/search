import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

const ResultList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <ResultItem
          id={item.ProductId}
          name={item.Name}
          key={item.ProductId}
        />
      ))}
    </ul>
  );
};

ResultList.propTypes = propTypes;
export default ResultList;
