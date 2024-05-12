"use client";
import { useWalletInfo } from "@web3modal/wagmi/react";
import Image from "next/image";

export default function ConnectButton() {
  const { walletInfo } = useWalletInfo();
  return (
    <div className="flex items-center">
      {walletInfo?.icon && (
        <div className="relative w-6 h-6">
          <Image alt="icon" src={walletInfo.icon} fill />
        </div>
      )}
      <w3m-button size="md" balance="hide" />
    </div>
  );
}
