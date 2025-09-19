import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [activeFeature, setActiveFeature] = useState("");
    const navigate = useNavigate()

    const features = [
        {
            id: 'airdrop',
            title: 'Request Airdrop',
            description: 'Get free test SOL tokens instantly on devnet for development and testing',
            icon: '💸',
            color: 'from-purple-600 to-pink-600',
            bgColor: 'from-purple-900/50 to-pink-900/50',
            borderColor: 'border-purple-500/30',
            glowColor: 'shadow-purple-900/50',
            onclick: () => navigate('/airdrop')
        },
        {
            id: 'send',
            title: 'Send Tokens',
            description: 'Transfer SOL and SPL tokens securely to any Solana wallet address',
            icon: '🚀',
            color: 'from-emerald-600 to-teal-600',
            bgColor: 'from-emerald-900/50 to-teal-900/50',
            borderColor: 'border-emerald-500/30',
            glowColor: 'shadow-emerald-900/50',
            onclick: () => navigate('/send')

        },
        {
            id: 'balance',
            title: 'Check Balance',
            description: 'View your SOL balance and transaction history in real-time',
            icon: '💰',
            color: 'from-amber-600 to-orange-600',
            bgColor: 'from-amber-900/50 to-orange-900/50',
            borderColor: 'border-amber-500/30',
            glowColor: 'shadow-amber-900/50',
            onclick: () => navigate('/checkBalance')

        },
        {
            id: 'sign',
            title: 'Sign Message',
            description: 'Cryptographically sign messages to verify wallet ownership',
            icon: '✍️',
            color: 'from-cyan-600 to-blue-600',
            bgColor: 'from-cyan-900/50 to-blue-900/50',
            borderColor: 'border-cyan-500/30',
            glowColor: 'shadow-cyan-900/50',
            onclick: () => navigate('/sign')
        }
    ];

    return (
        <div className="min-h-screen w-screen relative overflow-hidden">

        
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-800/20 to-cyan-800/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

          
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-40"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-600/15 to-teal-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500 opacity-30"></div>

        
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    animation: 'grid-move 20s linear infinite'
                }}></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 min-h-screen text-white">

                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center pt-20 pb-16 px-4">

                    {/* Main heading with glow effect */}
                    <div className="text-center mb-16 max-w-6xl">
                        <div className="relative mb-8">
                            <div className="absolute inset-0 blur-2xl opacity-50">
                                <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                    Solana Toolkit
                                </h1>
                            </div>
                            <h1 className="relative text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                                Solana Toolkit
                            </h1>
                        </div>

                        <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light leading-relaxed">
                            Your complete wallet management solution
                        </p>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Experience the power of Solana blockchain with our comprehensive suite of wallet tools.
                            From airdrops to transactions, everything you need in one beautiful interface.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">⚡</div>
                                <div className="text-sm text-gray-400 mt-2">Lightning Fast</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">🔒</div>
                                <div className="text-sm text-gray-400 mt-2">Secure</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">🎯</div>
                                <div className="text-sm text-gray-400 mt-2">User Friendly</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">🆓</div>
                                <div className="text-sm text-gray-400 mt-2">Free to Use</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="px-4 pb-20">
                    <div className="max-w-7xl mx-auto">

                        {/* Section header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                                Powerful Features
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Everything you need to interact with the Solana blockchain, designed with simplicity and security in mind
                            </p>
                        </div>

                        {/* Features grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className="relative group cursor-pointer"
                                    onMouseEnter={() => setActiveFeature(feature.id)}
                                    onMouseLeave={() => setActiveFeature("")}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                    onClick={feature.onclick}
                                >
                                    {/* Card glow effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                                    {/* Card content */}
                                    <div className={`relative bg-gradient-to-br ${feature.bgColor} backdrop-blur-xl p-8 rounded-3xl border ${feature.borderColor} transition-all duration-500 group-hover:scale-105 ${feature.glowColor} shadow-2xl`}>

                                        {/* Feature icon */}
                                        <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                                            {feature.icon}
                                        </div>

                                        {/* Feature content */}
                                        <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {feature.description}
                                        </p>

                                        {/* Action button */}
                                        <div className="relative overflow-hidden group">
                                            <button className={`
                                                        w-full px-6 py-3 rounded-xl font-semibold text-white
                                                        bg-gradient-to-r ${feature.color}
                                                        hover:shadow-lg ${feature.glowColor}
                                                        transition-all duration-300 
                                                        group-hover:scale-105 active:scale-95
                                                        cursor:pointer
                                                    `}>
                                                Try {feature.title}
                                            </button>
                                        </div>

                                        {/* Animated indicator */}
                                        {activeFeature === feature.id && (
                                            <div className="absolute top-4 right-4">
                                                <div className={`w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full animate-pulse`}></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to action */}
                        <div className="text-center">
                            <div className="relative group inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                                <button className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl">
                                    Get Started Now
                                </button>
                            </div>
                            <p className="text-gray-400 mt-4">Connect your wallet and start exploring</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-800/50 bg-black/20 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 py-12">
                        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Solana Devnet</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                                <span>Secure & Fast</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                                <span>Open Source</span>
                            </div>
                        </div>
                        <div className="text-center mt-8 text-gray-500">
                            <p>Built with ❤️ for the Solana ecosystem</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-1/4 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000 opacity-60"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500 opacity-60"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1500 opacity-60"></div>

          
        </div>
    );
}

export default HomePage;