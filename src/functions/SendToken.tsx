import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export function SendToken() {
    const wallet = useWallet()
    const { connection } = useConnection()
    const [to, setTo ] = useState("")
    const [ amount, setAmount ] = useState("")

    async function SendToken() {
        if (!wallet.publicKey) {
            return <p>Public Key not Provided</p>
        }
        const transaction = new Transaction()
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: Number(amount) * LAMPORTS_PER_SOL
        }))

        await wallet.sendTransaction(transaction, connection)
    }
    
    return (
        <div>
            <input type="text" placeholder="Public key"/>
            <input type="text" placeholder="Amount"/>
            <button onClick={SendToken} > Send Token</button>
        </div>
    )
}