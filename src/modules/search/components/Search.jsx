import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../common/fetch';
import { Error, Loading } from '../../common/components';
import ResultList from './ResultList';
import SearchInput from './SearchInput';


const fetchOptions = {
  queryParams: {
    'x-algolia-application-id': 'I1CQOYS68C',
    'x-algolia-api-key': 'eac7b807c0109771a245855c7501fca3',
  },
};

const buildQueryOptions = ({ endpoint, query }) => ({
  url: endpoint,
  data: {
    query,
    hitsPerPage: 5,
  },
  queryKey: ['search', query],
});

const propTypes = {
  endpoint: PropTypes.string,
};

const Search = ({
  endpoint,
}) => {
  const [query, setQuery] = useState('chicken');

  const handleOnSubmit = (event) => {
    const searchQuery = event.target.currentTarget;
    console.log(searchQuery);
    setQuery(searchQuery);
  };

  const queryOptions = buildQueryOptions({ endpoint, query });
  const options = {...queryOptions, ...fetchOptions};

  const {
    status,
    data,
    error
  } = useFetch(options);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error message={error.message} />;
  }

  return (
    <div className={''}>
    <SearchInput onSubmit={handleOnSubmit} />
      <ResultList data={data.hits}/>
    </div>
  );
}

Search.propTypes = propTypes;
export default Search;
