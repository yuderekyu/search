import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../common/fetch';
import { Error, Loading, NoResults } from '../../common/components';
import ResultList from './ResultList';
import SearchInput from './SearchInput';

const ALGOLIA_CONFIG = Object.freeze({
  'x-algolia-application-id': 'I1CQOYS68C',
  'x-algolia-api-key': 'eac7b807c0109771a245855c7501fca3',
});

const propTypes = {
  endpoint: PropTypes.string,
  algoliaOptions: PropTypes.object,
};

const Search = ({
  endpoint,
  algoliaOptions,
}) => {
  const [query, setQuery] = useState();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event?.target?.elements[0]?.value;
    setQuery(searchQuery);
    refetch();
  };

  const searchQueryOptions = {
    data: {
      query,
      ...algoliaOptions,
    }
  };

  const fetchQueryParams = {
    queryParams: ALGOLIA_CONFIG,
  };

  const options = {
    ...fetchQueryParams,
    ...searchQueryOptions,
    endpoint,
    enabled: query,
    method: 'POST',
    queryKey: ['search', query],
  };

  const {
    status,
    data,
    error,
    refetch,
  } = useFetch(options);

  let content;
  if (status === 'loading') {
    content = <Loading />;
  } if (status === 'error') {
    content = <Error message={error.message} />;
  } else if (data?.hits.length) {
    content = <ResultList data={data.hits}/>;
  } else if (data?.hits.length < 1) {
    content = <NoResults />;
  }

  return (
    <div className={''}>
      <SearchInput onSubmit={handleOnSubmit} />
      {content}
    </div>
  );
}

Search.propTypes = propTypes;
export default Search;
