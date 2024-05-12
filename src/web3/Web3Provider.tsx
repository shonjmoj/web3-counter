"use client";

import React, { ReactNode } from "react";
import { config, projectId } from "@/config";

import { createWeb3Modal } from "@web3modal/wagmi/react";

import { State, WagmiProvider } from "wagmi";

// Setup queryClient

if (!projectId) throw new Error("Project ID is not defined");

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  themeMode: "dark",
  projectId,
  // enableAnalytics: true, // Optional - defaults to your Cloud configuration
  // enableOnramp: true, // Optional - false as defaul
});

export default function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      {children}
    </WagmiProvider>
  );
}
