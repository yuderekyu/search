import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from './modules/common/components';
import SearchPage from './modules/search/components';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
      <SearchPage endpoint='https://i1cqoys68c-dsn.algolia.net/1/indexes/stg_choicemarket_products/query' algoliaOptions={{ hitsPerPage: 10}} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
