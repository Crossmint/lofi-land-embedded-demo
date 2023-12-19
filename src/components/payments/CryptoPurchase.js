import React, { useState, useEffect } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react";
import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";

function CryptoPurchase({
  count,
  setShowCongrats,
  setOrderIdentifier,
  setQuoteMessage,
}) {
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState("");
  const { walletConnector } = useDynamicContext();

  useEffect(() => {
    async function getWalletSigner() {
      try {
        const _signer = await walletConnector?.getSigner();
        const _address = await walletConnector?.fetchPublicAddress();
        setSigner(_signer);
        setAddress(_address);
      } catch (error) {
        console.error("Error getting Ethereum signer:", error);
      }
    }

    getWalletSigner();
  }, [walletConnector]);

  if (
    signer == null ||
    !address ||
    !["EVM", "ETH"].includes(walletConnector?.connectedChain || "")
  ) {
    return (
      <p className="mt-2 text-s">
        Connect your ETH(Testnet) wallet to proceed.
      </p>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <CrossmintPaymentElement
        projectId={process.env.REACT_APP_PROJECTID}
        collectionId="{process.env.REACT_APP_COLLECTIONID}"
        environment={process.env.REACT_APP_ENVIRONMENT}
        paymentMethod="ETH"
        recipient={{ wallet: address }}
        signer={{
          address,
          signAndSendTransaction: async (transaction) => {
            const signRes = await signer.sendTransaction(transaction);
            return signRes.hash;
          },
        }}
        mintConfig={{ totalPrice: `${1.5 * count}` }}
        uiConfig={{
          colors: {
            background: "transparent",
            backgroundSecondary: "transparent",
            backgroundTertiary: "#BBFFDD",
            textPrimary: "#7BA393",
            textSecondary: "#272727",
            accent: "#9D9D9D",
            danger: "#F96565",
          },
          fontSizeBase: "1rem",
          spacingUnit: "0.8rem",
          borderRadius: "8px",
          padding: "8px",
        }}
        onEvent={(event) => {
          console.log(event);
          if (event.type === "quote:status.changed") {
            console.log("QUOTE STATUS CHANGED", event);
            setQuoteMessage(event.payload);
          }

          if (event.type === "payment:process.succeeded") {
            console.log("PAYMENT SUCCESS. SHOW MINTING", event);
            const { orderIdentifier } = event.payload;
            console.log("Order Identifier", orderIdentifier);

            setOrderIdentifier(orderIdentifier);
            setShowCongrats(true);
          }
        }}
        style={{ width: "100%" }}
      />
    </div>
  );
}
export default CryptoPurchase;
