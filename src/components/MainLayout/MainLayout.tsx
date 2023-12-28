"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { MainHeader } from "..";

// Initialize react-query client
const initQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        suspense: false, // If set to true, page will not render until query is fetched
        refetchOnWindowFocus: false, // If you focus back to the window, react-query defaults refetch windows queries
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={initQueryClient()}>
      <MainHeader />
      <main>{children}</main>
    </QueryClientProvider>
  );
};

export default MainLayout;
