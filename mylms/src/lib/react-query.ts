import { Problem } from "@/types/http-errors.interface";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { Notification } from "@/types/notification.interface";
import { showNotification } from "@/stores/notification.store";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {},
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      showNotifications(error as Problem);
    },
  }),

  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const showNotifications = (problem: Problem) => {
  const notifications: Omit<Notification, "id">[] = [];
  if (problem?.errors) {
    Object.entries(problem.errors).forEach(([_, values]) =>
      values.forEach((errorMessage) =>
        notifications.push({
          message: errorMessage,
          type: "error",
        })
      )
    );
  } else if (problem?.detail) {
    notifications.push({
      message: problem.detail,
      type: "error",
    });
  }

  showNotification(notifications);
};

// import { Problem } from "@/types/http-errors.interface";
// import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

// export const queryClient = new QueryClient({
//   queryCache: new QueryCache({
//     onError: (error) => {
//       // debugger;
//       console.error("Global Query Error:", error);
//       // Show a global notification or handle the error
//     },
//   }),

//   mutationCache: new MutationCache({
//     onError: (error: unknown) => {
//       // debugger;
//       showNotifications(error as Problem);
//     },
//   }),

//   defaultOptions: {
//     queries: {
//       retry: 0, // Disable retries
//       refetchOnWindowFocus: false, // Prevent refetching on window focus
//       staleTime: 1000 * 60 * 5, // Mark data as fresh for 5 minutes
//       gcTime: 1000 * 60 * 60 * 24, // Cache data for 24 hours
//       // meta: { useErrorBoundary: true }, // Custom logic
//       throwOnError: false,
//     },
//   },
// });
