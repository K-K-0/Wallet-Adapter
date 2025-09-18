import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function CheckBalance() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [balance, setBalance] = useState<number | null>(null);

   useEffect(() => {
    if (publicKey) {
        connection.getBalance(publicKey).then((lamports) => {
            setBalance(lamports / LAMPORTS_PER_SOL)
        })
    }
   }, [publicKey, connection])
   
   
   return (
    <div>
       {publicKey ? (
        <p className="text-lg font-semibold">
          💰 Balance: {balance !== null ? `${balance} SOL` : "Loading..."}
        </p>
      ) : (
        <p className="text-gray-400">Connect wallet to see balance</p>
      )}
    </div>
   )


}