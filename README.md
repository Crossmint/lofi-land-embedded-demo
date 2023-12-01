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
- [Dynamic.xyz](https://docs.dynamic.xyz/quickstart) Environment ID: For authentication. Configure it to support ETH Testnet.

## 💾 Setup & Installation

1. **Clone the Repository**

    ```jsx
    git clone https://github.com/divya-ranjn/lofi.land.git
    ```
    
2. **Install the required packages**

    First, navigate to the cloned repository & then install dependencies. 

    ```jsx
    cd lofi.land
    yarn install
    ```

3. 🔐 **Setting the Environment Variables**

    Set up environment variables with the relevant keys. 

    Start by creating a file in the root directory (lofi.land) called **“.env”** & populate:

    ```jsx
    REACT_APP_COLLECTIONID=YOUR_CROSSMINT_COLLECTION_ID or use 6c3b6164-f6cc-42a1-89b8-df942da0fe7a for testing
    REACT_APP_PROJECTID=YOUR_CROSSMINT_PROJECT_ID or use 3eb7d488-1374-4fc8-b0be-ebe6be8a8e2f for testing
    REACT_APP_DYNAMICID=YOUR_DYNAMIC.XYZ_ENVIRONMENT_ID
    ```

4. ▶️ **Running the Demo**

    ```jsx
    yarn start
    ```

    If you followed everything correctly, you should be able to view and experience the demo on your browser.

## 🆘 Support

If you run into issues or have suggestions, we're here to help:

- Discord: [Join Crossmint on Discord](http://discord.gg/crossmint)
- Twitter: [@crossmint](https://twitter.com/crossmint)
