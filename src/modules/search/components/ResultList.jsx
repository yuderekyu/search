import React from 'react';
import PropTypes from 'prop-types';
import { ResultItem } from 'modules/search/components';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const ResultList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <ResultItem
          description={item.Description}
          id={item.ProductId}
          key={item.ProductId}
          name={item.Name}
        />
      ))}
    </ul>
  );
};

ResultList.propTypes = propTypes;
export default ResultList;
