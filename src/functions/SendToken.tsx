import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export function SendToken() {
    const wallet = useWallet()
    const { connection } = useConnection()
    const [to, setTo ] = useState("")
    const [ amount, setAmount ] = useState("")

    async function HandleSendToken() {
        if (!wallet.publicKey) {
            alert('Public key is not valid')
            return
        }
        if (!to) {
            alert('invalid public Key')
            return
        }
        try {
            const transaction = new Transaction()
            transaction.add(SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to.trim()),
                lamports: Number(amount) * LAMPORTS_PER_SOL
            }))

            await wallet.sendTransaction(transaction, connection)
            alert("Transaction sent successfully!");
        } catch (err: any) {
            console.error(err.message);
            alert("Transaction failed");
        }
        
    }
    
    return (
        <div>
            <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Public key"/>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount"/>
            <button onClick={HandleSendToken} > Send Token</button>
        </div>
    )
}