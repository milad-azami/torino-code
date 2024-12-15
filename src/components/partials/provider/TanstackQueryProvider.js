"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// eslint-disable-next-line
const queryClient = new QueryClient();

function TanstackQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
