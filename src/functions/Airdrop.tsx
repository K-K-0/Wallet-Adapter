import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [status, setStatus] = useState("");
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function requestAirdrop() {
        if (!wallet.publicKey) {
            setStatus("⚠️ Please connect your wallet first!");
            return;
        }
        if (!amount || isNaN(Number(amount))) {
            setStatus("⚠️ Enter a valid amount.");
            return;
        }

        try {
            setIsLoading(true);
            setStatus("⏳ Requesting airdrop...");
            const sig = await connection.requestAirdrop(
                wallet.publicKey,
                Number(amount) * LAMPORTS_PER_SOL
            );
            await connection.confirmTransaction(sig, "confirmed");
            setStatus(`✅ Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
            setAmount("");
        } catch (err) {
            setStatus(`❌ Error: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    }

    const getStatusColor = () => {
        if (status.includes("✅")) return "text-emerald-400";
        if (status.includes("❌")) return "text-red-400";
        if (status.includes("⚠️")) return "text-amber-400";
        return "text-cyan-400";
    };

    return (
        <div className="relative group">
            {/* Animated background gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Main container */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700/50 backdrop-blur-xl">

                {/* Header with floating particles effect */}
                <div className="text-center mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse rounded-full blur-xl"></div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2 relative z-10">
                        SOL Airdrop
                    </h2>
                    <p className="text-gray-400 text-sm relative z-10">Claim your Solana tokens instantly</p>
                </div>

                {/* Amount input with enhanced styling */}
                <div className="relative mb-6 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <input
                        type="number"
                        placeholder="Enter SOL amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="relative w-full px-6 py-4 rounded-xl bg-gray-800/80 backdrop-blur-sm text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-lg font-medium"
                        disabled={isLoading}
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <span className="text-sm font-semibold">SOL</span>
                    </div>
                </div>

                {/* Enhanced button with loading state */}
                <button
                    onClick={requestAirdrop}
                    disabled={!wallet.publicKey || isLoading}
                    className="relative w-full group mb-6 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl transition-transform duration-300 group-hover:scale-105"></div>
                    <div className="relative px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-bold text-white text-lg transition-all duration-300 group-hover:from-purple-400 group-hover:to-cyan-400 group-disabled:from-gray-600 group-disabled:to-gray-700 group-disabled:cursor-not-allowed">
                        {isLoading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Processing...</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center space-x-2">
                                <span>🚀</span>
                                <span>Request Airdrop</span>
                            </div>
                        )}
                    </div>
                </button>

                {/* Wallet connection status */}
                {wallet.publicKey ? (
                    <div className="bg-gradient-to-r from-emerald-900/50 to-green-900/50 rounded-xl p-4 mb-4 border border-emerald-700/30">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-emerald-400 text-sm font-semibold">Wallet Connected</span>
                        </div>
                        <p className="text-xs text-gray-300 break-words font-mono bg-black/30 p-2 rounded-lg">
                            {wallet.publicKey.toBase58()}
                        </p>
                    </div>
                ) : (
                    <div className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 rounded-xl p-4 mb-4 border border-amber-700/30">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <span className="text-amber-400 text-sm font-semibold">Please connect your wallet</span>
                        </div>
                    </div>
                )}

                {/* Status message with enhanced styling */}
                {status && (
                    <div className="relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                        <p className={`text-sm font-medium relative z-10 ${getStatusColor()}`}>
                            {status}
                        </p>
                    </div>
                )}

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
        </div>
    );
}