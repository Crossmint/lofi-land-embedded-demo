import React from 'react'; 
import { DynamicConnectButton, DynamicContextProvider, DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react'; 
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum-all";
import CryptoPurchase from '../payments/CryptoPurchase';

const WalletConnect = ({ children, count, setShowCongrats, setOrderIdentifier, setQuoteMessage }) => {
  const cssOverrides = `
    .button--padding-large {
      border-radius: 8px;
      border: none;
      padding: 0.75rem 1.2rem;
      font-weight: 600;
      width: 100%;
      background: #BBFFDD;
      border: 1.333px solid #BBFFDD;
      color : #BBFFDD;
    } 
    .connect-button .typography {
      color: #0f251d;
    }
  `;
  return (
    <DynamicContextProvider
      settings={{
        initialAuthenticationMode: "connect-only",
        environmentId: process.env.REACT_APP_DYNAMICID,
        siweStatement: "Sign message to connect your wallet",
        walletConnectors: [EthereumWalletConnectors],
        cssOverrides,
      }}
    > 
      <DynamicWidget />
      <CryptoPurchase key="crypto-purchase" count={count} setShowCongrats={setShowCongrats} setOrderIdentifier={setOrderIdentifier} setQuoteMessage={setQuoteMessage} />
      {children}
    </DynamicContextProvider>
  );
};

export default WalletConnect;