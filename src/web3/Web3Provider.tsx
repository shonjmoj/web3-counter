"use client";
import { ReactNode } from "react";
import { ThirdwebProvider } from "thirdweb/react";

export default function Web3ModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>;
}
