import ConnectButton from "./components/ConnectWalletBtn";
import Contract from "./components/Counter";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around p-6">
      <Contract />
    </main>
  );
}
