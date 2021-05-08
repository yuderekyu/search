import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch, { UseFetchOptionBuilder } from 'modules/common/fetch';
import { Error, Loading } from 'modules/common/components';
import { ResultList, SearchInput, NoResults } from 'modules/search/components';

const propTypes = {
  endpoint: PropTypes.string,
  searchOptions: PropTypes.object,
};

const Search = ({
  endpoint,
  searchOptions,
}) => {
  const [query, setQuery] = useState();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event?.target?.elements[0]?.value;
    setQuery(searchQuery);
    refetch();
  };

  const options = UseFetchOptionBuilder.run({
    searchOptions,
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
    <div>
      <SearchInput onSubmit={handleOnSubmit} />
      {result}
    </div>
  );
}

Search.propTypes = propTypes;
export default Search;
