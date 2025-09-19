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
    <div className="w-full max-w-md mx-auto">
      {/* Balance Display Card */}
      <div className="relative group">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          {publicKey ? (
            <>
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Wallet Balance
                </h3>
              </div>

              {/* Balance Display */}
              <div className="text-center">
                {balance !== null ? (
                  <div className="space-y-4">
                    {/* Main Balance */}
                    <div className="relative">
                      <div className="absolute inset-0 blur-xl opacity-50">
                        <div className="text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                          {balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 9 })}
                        </div>
                      </div>
                      <div className="relative text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        {balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 9 })}
                      </div>
                    </div>

                    {/* SOL Label */}
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <span className="text-2xl font-semibold text-white">SOL</span>
                    </div>

                    {/* Lamports Equivalent */}
                    <div className="bg-black/20 rounded-xl p-4 border border-white/10">
                      <p className="text-gray-400 text-sm mb-1">Equivalent in Lamports</p>
                      <p className="text-white font-mono text-lg">
                        {(balance * LAMPORTS_PER_SOL).toLocaleString()} lamports
                      </p>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center justify-center gap-2 pt-4">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                      <span className="text-emerald-400 text-sm font-medium">Balance Updated</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Loading Animation */}
                    <div className="relative">
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500/20 border-t-emerald-500"></div>
                      </div>
                    </div>

                    {/* Loading Text */}
                    <div className="text-center">
                      <p className="text-white text-xl font-semibold mb-2">Loading Balance...</p>
                      <p className="text-gray-400 text-sm">Fetching data from Solana network</p>
                    </div>

                    {/* Loading Dots */}
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center space-y-6">
              {/* Disconnected Icon */}
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-xl flex items-center justify-center opacity-50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Disconnected Message */}
              <div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Wallet Not Connected</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect your Solana wallet to view your balance
                </p>
              </div>

              {/* Connection Status */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full opacity-50"></div>
                <span className="text-gray-500 text-sm">Disconnected</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-white font-medium text-sm">Real-time</h4>
          </div>
          <p className="text-gray-400 text-xs">
            Live balance updates
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-white font-medium text-sm">Accurate</h4>
          </div>
          <p className="text-gray-400 text-xs">
            Precise to 9 decimals
          </p>
        </div>
      </div>

      <style jsx>{`
            @keyframes bounce-dots {
                0%, 80%, 100% {
                    transform: scale(0);
                    opacity: 0.5;
                }
                40% {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        `}</style>
    </div>
  )
}