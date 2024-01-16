import React, { useState, useCallback } from "react";
import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";

function CardPurchase({
  count,
  setShowCongrats,
  setOrderIdentifier,
  setQuoteMessage,
}) {
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleWalletChange = useCallback((e) => {
    setWallet(e.target.value);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <label className="email-label" htmlFor="email">
        Email (Required)
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        className="email-input mb-3"
        placeholder="Enter your email"
      />
      <label className="email-label" htmlFor="wallet">
        Wallet Address (optional)
      </label>
      <input
        type="text"
        id="wallet"
        name="wallet"
        value={wallet}
        onChange={handleWalletChange}
        className="email-input mb-3"
        placeholder="Wallet address"
      />
      <CrossmintPaymentElement
        projectId={process.env.REACT_APP_PROJECT_ID}
        collectionId={process.env.REACT_APP_COLLECTION_ID}
        environment={process.env.REACT_APP_ENVIRONMENT}
        recipient={wallet ? { email, wallet } : { email }}
        mintConfig={{ totalPrice: `${1.5 * count}` }}
        uiConfig={{
          colors: {
            background: "transparent",
            backgroundSecondary: "#0F251D",
            backgroundTertiary: "#BBFFDD",
            textPrimary: "#7BA393",
            textSecondary: "#272727",
            accent: "#9D9D9D",
            danger: "#F96565",
          },
          fontSizeBase: "1rem",
          spacingUnit: "0.2rem",
          borderRadius: "8px",
        }}
        onEvent={(event) => {
          if (event.type === "quote:status.changed") {
            setQuoteMessage(event.payload);
          }

          if (event.type === "payment:process.succeeded") {
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

export default CardPurchase;
