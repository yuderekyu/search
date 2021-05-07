import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from './modules/common/components';
import Search from './modules/search/components';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Search endpoint='https://i1cqoys68c-dsn.algolia.net/1/indexes/stg_choicemarket_products/query' />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
