import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export function SendToken() {
    const wallet = useWallet()
    const { connection } = useConnection()
    const [to, setTo] = useState("")
    const [amount, setAmount] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function HandleSendToken() {
        if (!wallet.publicKey) {
            alert('Public key is not valid')
            return
        }
        if (!to) {
            alert('invalid public Key')
            return
        }

        setIsLoading(true)

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
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Send Token Card */}
            <div className="relative group mb-8">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 group-focus-within:opacity-40 transition duration-500"></div>

                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                                Send SOL Token
                            </h3>
                        </div>
                        <p className="text-gray-300 text-lg">
                            Transfer SOL tokens to any Solana wallet address
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Recipient Address Input */}
                        <div className="relative">
                            <label className="block text-gray-300 text-sm font-medium mb-3">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Recipient Address
                                </span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                    placeholder="Enter recipient's public key (44 characters)"
                                    className="
                                        w-full px-6 py-4 
                                        bg-black/30 backdrop-blur-sm 
                                        border border-white/20 
                                        rounded-xl text-white 
                                        placeholder-gray-400
                                        focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400/50
                                        transition-all duration-300
                                        font-mono text-sm
                                    "
                                />
                                {to && (
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                        {to.length === 44 ? (
                                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <p className="text-gray-500 text-xs mt-2">
                                {to.length}/44 characters
                            </p>
                        </div>

                        {/* Amount Input */}
                        <div className="relative">
                            <label className="block text-gray-300 text-sm font-medium mb-3">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                    Amount (SOL)
                                </span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="
                                        w-full px-6 py-4 pr-16
                                        bg-black/30 backdrop-blur-sm 
                                        border border-white/20 
                                        rounded-xl text-white text-lg
                                        placeholder-gray-400
                                        focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400/50
                                        transition-all duration-300
                                    "
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">
                                    SOL
                                </div>
                            </div>
                            {amount && (
                                <p className="text-gray-500 text-xs mt-2">
                                    ≈ {(Number(amount) * LAMPORTS_PER_SOL).toLocaleString()} lamports
                                </p>
                            )}
                        </div>

                        {/* Quick Amount Buttons */}
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm font-medium">Quick amounts:</p>
                            <div className="flex flex-wrap gap-3">
                                {['0.1', '0.5', '1.0', '2.0'].map((quickAmount) => (
                                    <button
                                        key={quickAmount}
                                        onClick={() => setAmount(quickAmount)}
                                        className="
                                            px-4 py-2 
                                            bg-black/20 hover:bg-black/40
                                            border border-white/10 hover:border-orange-400/50
                                            rounded-lg text-gray-300 hover:text-orange-400
                                            transition-all duration-300
                                            text-sm font-medium
                                        "
                                    >
                                        {quickAmount} SOL
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Send Button */}
                        <div className="relative group/button pt-4">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-xl blur opacity-30 group-hover/button:opacity-60 transition duration-300"></div>

                            <button
                                onClick={HandleSendToken}
                                disabled={isLoading || !wallet.publicKey || !to.trim() || !amount.trim()}
                                className="
                                    relative w-full
                                    bg-gradient-to-r from-orange-600 via-red-600 to-pink-600
                                    hover:from-orange-500 hover:via-red-500 hover:to-pink-500
                                    disabled:from-gray-700 disabled:via-gray-600 disabled:to-gray-700
                                    disabled:cursor-not-allowed disabled:opacity-50
                                    text-white font-bold py-4 px-8 rounded-xl
                                    transition-all duration-300 transform 
                                    hover:scale-105 active:scale-95
                                    shadow-2xl shadow-orange-900/50
                                    flex items-center justify-center gap-3
                                    text-lg
                                "
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        <span>Send SOL</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold">Fast Transfer</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Transactions complete in under 1 second on Solana
                    </p>
                </div>

                <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold">Low Fees</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Minimal transaction fees on the Solana network
                    </p>
                </div>
            </div>

           
        </div>
    );
}