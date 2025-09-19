import { useWallet } from "@solana/wallet-adapter-react";
import { ed25519 } from '@noble/curves/ed25519';
import { useState } from "react";

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState("");

    async function OnClick() {
        if (!publicKey) {
            setStatus("Please connect your wallet first");
            setStatusType("error");
            return;
        }

        if (!signMessage) {
            setStatus("Wallet does not support message signing");
            setStatusType("error");
            return;
        }

        if (!message.trim()) {
            setStatus("Please enter a message to sign");
            setStatusType("error");
            return;
        }

        setIsLoading(true);
        setStatus("Signing message...");
        setStatusType("info");

        try {
            const encodeMessage = new TextEncoder().encode(message);
            const signature = await signMessage(encodeMessage);

            if (!ed25519.verify(signature, encodeMessage, publicKey.toBytes())) {
                throw new Error("Invalid signature verification");
            }

            setStatus("✅ Message signed successfully!");
            setStatusType("success");
        } catch (error) {
            setStatus("❌ Failed to sign message");
            setStatusType("error");
            console.error("Signing error:", error);
        } finally {
            setIsLoading(false);
        }
    }

    const getStatusColor = () => {
        switch (statusType) {
            case 'success': return 'text-emerald-400';
            case 'error': return 'text-red-400';
            case 'info': return 'text-blue-400';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Message Input Card */}
            <div className="relative group mb-8">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 group-focus-within:opacity-40 transition duration-500"></div>

                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                    <h3 className="text-2xl font-bold texthite mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Sign Your Message
                    </h3>

                    {/* Input Field */}
                    <div className="relative mb-6">
                        <label className="block text-gray-300 text-sm font-medium mb-3">
                            Enter your message
                        </label>
                        <div className="relative">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here..."
                                rows={4}
                                className="
                                    w-full px-6 py-4 
                                    bg-black/30 backdrop-blur-sm 
                                    border border-white/20 
                                    rounded-xl text-white 
                                    placeholder-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50
                                    transition-all duration-300
                                    resize-none
                                "
                            />
                            {/* Character counter */}
                            <div className="absolute bottom-3 right-4 text-xs text-gray-500">
                                {message.length} chars
                            </div>
                        </div>
                    </div>

                    {/* Sign Button */}
                    <div className="relative group/button mb-6">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover/button:opacity-60 transition duration-300"></div>

                        <button
                            onClick={OnClick}
                            disabled={isLoading || !publicKey || !message.trim()}
                            className="
                                relative w-full
                                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                                hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                                disabled:from-gray-700 disabled:via-gray-600 disabled:to-gray-700
                                disabled:cursor-not-allowed disabled:opacity-50
                                text-white font-bold py-4 px-8 rounded-xl
                                transition-all duration-300 transform 
                                hover:scale-105 active:scale-95
                                shadow-2xl shadow-purple-900/50
                                flex items-center justify-center gap-3
                            "
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                    <span>Signing...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                    <span>Sign Message</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Status Display */}
                    {status && (
                        <div className={`
                            text-center p-4 rounded-xl 
                            bg-black/20 border border-white/10
                            ${getStatusColor()} font-medium
                            animate-fade-in
                        `}>
                            {status}
                        </div>
                    )}
                </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold">Secure</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Your message is signed locally and never leaves your device
                    </p>
                </div>

                <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold">Fast</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Lightning-fast Ed25519 cryptographic signatures
                    </p>
                </div>

                <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold">Verified</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Signatures are automatically verified for authenticity
                    </p>
                </div>
            </div>

           
        </div>
    );
}