import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      debugger;
      console.error("Global Query Error:", error);
      // Show a global notification or handle the error
    },
  }),
  defaultOptions: {
    queries: {
      retry: 0, // Disable retries
      refetchOnWindowFocus: false, // Prevent refetching on window focus
      staleTime: 1000 * 60 * 5, // Mark data as fresh for 5 minutes
      gcTime: 1000 * 60 * 60 * 24, // Cache data for 24 hours
      // meta: { useErrorBoundary: true }, // Custom logic
      throwOnError: false,
    },
  },
});
