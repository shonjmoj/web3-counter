"use client";
import { chain, client } from "@/utils/constants";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

export default function ConnectWalletBtn() {
  return (
    <div className="flex items-center">
      <ConnectButton wallets={wallets} client={client} chain={chain} />
    </div>
  );
}
