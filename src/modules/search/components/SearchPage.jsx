import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch, { UseFetchOptionBuilder } from '../../common/fetch';
import { Error, Loading, NoResults } from '../../common/components';
import ResultList from './ResultList';
import SearchInput from './SearchInput';

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

  const options = UseFetchOptionBuilder.run({
    algoliaOptions,
    endpoint,
    query,
  });

  const {
    status,
    data,
    error,
    refetch,
  } = useFetch(options);

  let result;
  if (status === 'loading') {
    result = <Loading />;
  } if (status === 'error') {
    result = <Error message={error.message} />;
  } else if (data?.hits?.length) {
    result = <ResultList data={data.hits}/>;
  } else if (data?.hits?.length < 1) {
    result = <NoResults />;
  }

  return (
    <div className={''}>
      <SearchInput onSubmit={handleOnSubmit} />
      {result}
    </div>
  );
}

Search.propTypes = propTypes;
export default Search;
