import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

const ResultList = ({ data }) => {
  const generateItems = () => {
    const items = data.map(item => (
      <ResultItem
        id={item.ProductId}
        name={item.Name}
      />
    ));

    return items;
  };

  return (
    <ul>
      {generateItems()}
    </ul>
  );
};

ResultList.propTypes = propTypes;
export default ResultList;
