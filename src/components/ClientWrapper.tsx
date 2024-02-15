"use client";
import React, { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const ClientWrapper: React.FC = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={className}>{children}</div>
    </QueryClientProvider>
  );
};

export default ClientWrapper;
