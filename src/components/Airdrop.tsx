import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { RequestAirdrop } from "../functions/Airdrop";
import "@solana/wallet-adapter-react-ui/styles.css";

function Airdrop() {
    return (
        <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className="min-h-screen w-screen relative overflow-hidden flex items-center justify-center">
                        {/* Background layers */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-800/20 to-cyan-800/20"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                        </div>

                        {/* Glow Blobs */}
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-40"></div>
                        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 opacity-40"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500 opacity-30"></div>

                        {/* Grid lines */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                                    backgroundSize: "50px 50px",
                                    animation: "grid-move 20s linear infinite",
                                }}
                            ></div>
                        </div>

                        {/* MAIN CONTENT */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 py-8 max-w-4xl w-full">
                            {/* Heading */}
                            <div className="text-center mb-12">
                                <div className="relative">
                                    <div className="absolute inset-0 blur-2xl">
                                        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                            Solana Airdrop
                                        </h1>
                                    </div>
                                    <h1 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-tight">
                                        Solana Airdrop
                                    </h1>
                                </div>

                                <p className="text-gray-300 text-xl md:text-2xl mb-4 font-light leading-relaxed">
                                    Connect your wallet and claim free test SOL
                                </p>
                                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                                    Build and test your decentralized applications on Solana's lightning-fast devnet
                                </p>
                            </div>

                            {/* Wallet Button */}
                            <div className="relative group mb-12">
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                                <div className="relative">
                                    <WalletMultiButton
                                        className="
                      !bg-gradient-to-r !from-emerald-600 !to-teal-600 
                      !px-8 !py-4 !rounded-xl !text-lg
                      !font-bold !text-white !border-0
                      !shadow-2xl !shadow-emerald-900/50
                      !transition-all !duration-300
                      hover:!from-emerald-500 hover:!to-teal-500 
                      hover:!shadow-emerald-800/60 hover:!scale-105
                      active:!scale-95
                      !backdrop-blur-sm
                    "
                                    />
                                </div>
                            </div>

                            {/* Airdrop Button */}
                            <div className="w-full flex justify-center">
                                <RequestAirdrop />
                            </div>

                            {/* Footer Badges */}
                            <div className="mt-16 text-center">
                                <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span>Devnet Connected</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                                        <span>Test Environment</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                                        <span>Free SOL Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating dots */}
                        <div className="absolute top-1/4 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
                        <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000 opacity-60"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500 opacity-60"></div>
                        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1500 opacity-60"></div>

                       
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default Airdrop;
