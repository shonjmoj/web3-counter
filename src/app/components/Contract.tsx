"use client";
import { abi, address, chain, client } from "@/utils/constants";
import { getContract, prepareContractCall } from "thirdweb";
import {
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

const contract = getContract({
  client,
  chain,
  address,
  abi,
});

export default function Contract() {
  const activeAccount = useActiveAccount();
  const {
    data: count,
    isLoading,
    refetch,
  } = useReadContract({
    contract,
    method: "getCount",
  });

  if (isLoading)
    return (
      <div className="text-white text-3xl opacity-80 italic">Loading...</div>
    );

  if (!activeAccount) return null;

  return (
    <div className="text-white text-4xl font-bold flex flex-col gap-4 items-center">
      <h2 className="text-5xl">{count?.toString()}</h2>
      <div className="flex gap-3 font-bold text-xl">
        <TransactionButton
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
          onTransactionConfirmed={() => refetch()}
          transaction={() => {
            return prepareContractCall({
              contract,
              method: "increment",
            });
          }}
        >
          +
        </TransactionButton>
        <TransactionButton
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
          onTransactionConfirmed={() => refetch()}
          transaction={() => {
            return prepareContractCall({
              contract,
              method: "decrement",
            });
          }}
        >
          -
        </TransactionButton>
      </div>
    </div>
  );
}
