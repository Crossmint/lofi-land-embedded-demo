# Crossmint : Lofi.land Embedded Checkout Demo

Add Crossmint’s custom embedded checkout, a fully customizable iframe seamlessly integrated onto your website.

**Experience the live demo:** [https://lofi-land.demos-crossmint.com/](https://lofi-land.demos-crossmint.com/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=hhttps://github.com/divya-ranjn/lofi-land-embedded-demo)

## 🛠️ Getting Started

Follow the setup and installation instructions below to run this demo on your local machine.

## 📋 Prerequisites

- **Node.js**: If not installed, download from the [Node.js official website](https://nodejs.org/).
- **Yarn**: If not installed, run the following command in your terminal.

  ```bash
  npm install -g yarn
  ```

- **Crossmint Keys**: Obtain these from the Crossmint Dev Console after deploying a collection - [https://docs.crossmint.com/docs/create-an-nft-collection](https://docs.crossmint.com/docs/create-an-nft-collection)
  - Collection ID
  - Project ID
- [Dynamic.xyz](https://docs.dynamic.xyz/quickstart) Environment ID: For authentication. Configure it to support ETH Testnet. Once you have your environment ID setup, navigate to the [EVM configurations](https://app.dynamic.xyz/dashboard/configurations#evm) page in the Dynamic dashboard.

  ![dynamic evm configuration](https://bafkreid7dnonfnihee7p7wmqicqofer3mukhtlwlmxwahaw3c3lb74zuf4.ipfs.nftstorage.link/)

## 💾 Setup & Installation

1. **Clone the Repository **

   ```bash
   git clone https://github.com/divya-ranjn/lofi-land-embedded-demo.git
   ```

2. **Install the required packages**

   First, navigate to the cloned repository & then install dependencies.

   ```bash
   cd lofi.land
   yarn install
   ```

3. 🔐 **Setting the Environment Variables**

   Set up environment variables with the relevant keys.

   You can copy the `sample.env` file and name the new one `.env`. Then fill in your values:

   ```env
   REACT_APP_COLLECTION_ID=YOUR_CROSSMINT_COLLECTION_ID or use 6c3b6164-f6cc-42a1-89b8-df942da0fe7a for testing
   REACT_APP_PROJECT_ID=YOUR_CROSSMINT_PROJECT_ID or use 3eb7d488-1374-4fc8-b0be-ebe6be8a8e2f for testing
   REACT_APP_ENVIRONMENT=YOUR_CROSSMINT_ENVIRONMENT
   REACT_APP_DYNAMIC_ID=YOUR_DYNAMIC_XYZ_ENVIRONMENT_ID
   GENERATE_SOURCEMAP=false
   ```

4. ▶️ **Running the Demo**

   ```bash
   yarn start
   ```

   If you followed everything correctly, you should be able to view and experience the demo on your browser.

## 🆘 Support

If you run into issues or have suggestions, we're here to help:

- Docs: [docs.crossmint.com](https://docs.crossmint.com)
- Discord: [Join Crossmint on Discord](https://discord.gg/crossmint)
- Twitter: [@crossmint](https://twitter.com/crossmint)
