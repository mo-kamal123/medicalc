import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * Main App Component
 *
 * Root component that sets up the application's providers:
 * - QueryClientProvider: Manages server state and caching with React Query
 * - Redux Provider: Manages global application state
 * - RouterProvider: Handles routing and navigation
 *
 * This component wraps the entire application with necessary context providers
 * required for state management, data fetching, and routing.
 *
 * @returns {JSX.Element} Application root with all providers
 */
function App() {
  // Create a new QueryClient instance for React Query
  // This manages server state, caching, and background updates
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Configure default query options
        refetchOnWindowFocus: false, // Don't refetch when window gains focus
        retry: 1, // Retry failed requests once
        staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* Redux Provider - Provides global state management */}
      <Provider store={store}>
        {/* Router Provider - Handles routing and navigation */}
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
