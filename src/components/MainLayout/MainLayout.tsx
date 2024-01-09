"use client";

import { initIconSet, initLocalization } from "@/infrastructure";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { MainHeader } from "..";

initIconSet();
initLocalization();

// Initialize react-query client
const initQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
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
