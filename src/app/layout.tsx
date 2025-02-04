import Web3ModalProvider from "@/web3/Web3Provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConnectWalletBtn from "./components/ConnectWalletBtn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decentralized Counter",
  description:
    "A simple decentralized counter using Web3. smart contract deployed on Ethereum blockchain, Built with Next.js and ThirdWeb 🚀.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Web3ModalProvider>
        <body className={inter.className}>
          <nav className="p-4 fixed top-0 w-full flex justify-end">
            <ConnectWalletBtn />
          </nav>
          <div className="flex flex-col min-h-screen justify-center items-center">
            <h1 className="text-4xl font-semibold">Web3 Counter</h1>
            {children}
          </div>
        </body>
      </Web3ModalProvider>
    </html>
  );
}
