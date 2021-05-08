const ALGOLIA_CONFIG = Object.freeze({
  'x-algolia-application-id': 'I1CQOYS68C',
  'x-algolia-api-key': 'eac7b807c0109771a245855c7501fca3',
});

class UseFetchOptionBuilder {
  static defaultFetchOptions () {
    return {
      method: 'POST',
      queryParams: ALGOLIA_CONFIG,
    };
  };

  static buildReactQueryOptions ({ query, endpoint }) {
    return {
      enabled: query,
      endpoint,
      queryKey: ['search', query],
    };
  };

  static buildDataOptions ({ searchOptions, query }) {
    return {
      data: {
        query,
        ...searchOptions,
      }
    };
  };

  static run (options) {
    const {
      searchOptions,
      endpoint,
      query
    } = options;

    return {
      ...UseFetchOptionBuilder.buildDataOptions({ searchOptions, query }),
      ...UseFetchOptionBuilder.buildReactQueryOptions({ query, endpoint }),
      ...UseFetchOptionBuilder.defaultFetchOptions(),
    };
  };
}

export default UseFetchOptionBuilder;
