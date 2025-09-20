# Solana Toolkit

A clean, functional web interface for essential Solana wallet operations. Built for developers who need reliable blockchain interactions without the fluff.

## What it does

- **Get Test SOL**: Request devnet tokens instantly
- **Send SOL**: Transfer tokens to any Solana address  
- **Check Balance**: View wallet balance in real-time
- **Sign Messages**: Cryptographically prove wallet ownership

## Quick Start

1. Clone the repository
```bash
git clone https://github.com/yourusername/solana-toolkit.git
cd solana-toolkit
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Connect your Solana wallet and start using the tools

## Tech Stack

- **React** - UI framework
- **Solana Web3.js** - Blockchain interactions
- **Solana Wallet Adapter** - Wallet connectivity
- **Tailwind CSS** - Styling
- **React Router** - Navigation

## Core Dependencies

```json
{
  "@solana/wallet-adapter-react": "^0.15.35",
  "@solana/wallet-adapter-react-ui": "^0.9.35",
  "@solana/web3.js": "^1.91.4",
  "@noble/curves": "^1.2.0",
  "react": "^18.2.0",
  "react-router-dom": "^6.15.0"
}
```

## Features

### Airdrop Component
Request test SOL tokens on Solana devnet. No rate limits, instant delivery.

```javascript
// Connect wallet and request tokens
const signature = await connection.requestAirdrop(publicKey, amount);
```

### Send Tokens
Transfer SOL to any valid Solana address with proper validation and error handling.

```javascript
// Create and send transfer transaction
const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: wallet.publicKey,
    toPubkey: new PublicKey(recipient),
    lamports: amount * LAMPORTS_PER_SOL
  })
);
```

### Balance Checker
Real-time balance updates with lamports precision.

```javascript
// Get current balance
const balance = await connection.getBalance(publicKey);
```

### Message Signing
Ed25519 cryptographic signatures for wallet ownership verification.

```javascript
// Sign and verify messages
const signature = await signMessage(encodedMessage);
const isValid = ed25519.verify(signature, encodedMessage, publicKey.toBytes());
```

## Project Structure

```
src/
├── components/
│   ├── Airdrop.jsx          # Request test SOL
│   ├── SendToken.jsx        # Transfer tokens
│   ├── CheckBalance.jsx     # View balance
│   └── SignMessage.jsx      # Sign messages
├── pages/
│   └── HomePage.jsx         # Main landing page
└── App.jsx                  # Routing setup
```

## Network Configuration

Currently configured for Solana devnet:

```javascript
const endpoint = clusterApiUrl("devnet");
```

To switch networks, update the endpoint in your connection provider.

## Wallet Support

Compatible with all Solana wallets through the Wallet Adapter:
- Phantom
- Solflare  
- Backpack
- Glow
- And more

## Security Notes

- All transactions require wallet approval
- Message signing happens locally in your wallet
- No private keys are stored or transmitted
- Devnet tokens have no real value

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-tool`)
3. Commit your changes (`git commit -am 'Add new tool'`)
4. Push to the branch (`git push origin feature/new-tool`)
5. Open a Pull Request

## Local Development

The app runs on `http://localhost:3000` by default. Make sure you have:
- Node.js 16+
- A Solana wallet browser extension
- Some devnet SOL for testing transactions

## Troubleshooting

**Wallet won't connect?**
- Refresh the page and try again
- Check if your wallet is set to devnet
- Disable other wallet extensions temporarily

**Transaction failed?**
- Ensure you have enough SOL for transaction fees
- Verify the recipient address is valid
- Check your wallet's transaction approval popup

**Balance not updating?**
- Wallet connections can be cached
- Try disconnecting and reconnecting your wallet

## License

MIT License - feel free to use this code for your own projects.

## Network Status

- **Environment**: Solana Devnet
- **RPC Endpoint**: `https://api.devnet.solana.com`
- **Transaction Fees**: ~0.000005 SOL
- **Block Time**: ~400ms

---

Built for developers who need straightforward Solana wallet tools without unnecessary complexity.

Built with ❤️ for the Solana ecosystem