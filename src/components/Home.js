import React, { useState } from "react";
import LottiePlayer from "react-lottie-player";
import TrendingSongs from "./TrendingSongs";
import Footer from "./Footer";
import PurchaseSummary from "./payments/PurchaseSummary";
import CardPurchase from "./payments/CardPurchase";
import WalletConnect from "./wallet/WalletConnect";
import EthereumIcon from "./icons/EthereumIcon";
import CreditCardIcon from "./icons/CreditCardIcon";

const Home = () => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [activeTab, setActiveTab] = useState("crypto");
  const [count, setCount] = useState(1);
  const [showCongrats, setShowCongrats] = useState(false);
  const [orderIdentifier, setOrderIdentifier] = useState("");
  const [quoteMessage, setQuoteMessage] = useState(undefined);
  const [isCryptoTabOpened, setIsCryptoTabOpened] = useState(true);
  const [isCardTabOpened, setIsCardTabOpened] = useState(false);

  const handleCardTabClick = () => {
    setIsCardTabOpened(true);
    setIsCryptoTabOpened(false);
    setActiveTab("card");
  };

  const handleCryptoTabClick = () => {
    setIsCryptoTabOpened(true);
    setIsCardTabOpened(false);
    setActiveTab("crypto");
  };

  const handlePurchase = () => {
    setIsCryptoTabOpened(true);
    setActiveTab("crypto");
    setIsCardTabOpened(false);
    setShowPurchaseModal(true);
  };

  return (
    <div className="container hero py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-3 mb-lg-0 pr-5">
          <h1 className="hero-title mb-3">Your Gateway to Lofi Bliss</h1>
          <p className="hero-text mb-3">
            This is a demo of Crossmint's custom embedded checkout, a fully
            customizable iframe seamlessly integrated onto your website.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="contain-right">
            <div className="card">
              <span onClick={() => handlePurchase()}>
                <img
                  src="/nft-img.gif"
                  className="card-img-top nft-image"
                  alt="NFT"
                />
              </span>
              <div className="card-body">
                <h5 className="card-title mt-2 mb-2">Test NFT Collection</h5>
                <p className="card-text">
                  This is a demo collection by Crossmint.
                </p>
                <p>
                  Click the Collect button to demo the purchase flow with
                  cross-chain ETH or credit card.
                </p>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="price-title">Price</div>
                    <span className="price">$1.25</span>{" "}
                    <span className="original-price">$2.00</span>
                    <span className="discount">37.5% Off</span>
                  </div>
                  <div className="col text-end">
                    <button
                      className="btn btn-main"
                      onClick={() => handlePurchase()}
                    >
                      Collect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPurchaseModal && <div className="modal-backdrop"></div>}
      <div
        className={`modal ${showPurchaseModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showPurchaseModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order summary</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowPurchaseModal(false)}
              ></button>
            </div>

            <div className="modal-body">
              {showCongrats ? (
                <div className="purchase-successful">
                  <LottiePlayer
                    path="/success.json"
                    play
                    style={{
                      width: "300px",
                      height: "300px",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                  <h3 className="successful-purchase center-text">
                    Purchase Successful!
                  </h3>
                  <p className="text-general mb-2">
                    Your transaction has been completed successfully. You can
                    now view your NFT in your wallet.
                  </p>
                </div>
              ) : (
                <>
                  <div className="row mb-3">
                    {quoteMessage != null ? (
                      <PurchaseSummary initialQuotePayload={quoteMessage} />
                    ) : (
                      ""
                    )}
                  </div>

                  <ul
                    className="nav nav-tabs row g-2"
                    id="paymentTab"
                    role="tablist"
                  >
                    <li className="nav-item col-6" role="presentation">
                      <div
                        className={`payment-option ${
                          activeTab === "crypto" ? "active" : ""
                        }`}
                        id="crypto-tab"
                        role="tab"
                        aria-controls="crypto"
                        aria-selected={activeTab === "crypto"}
                        onClick={() => handleCryptoTabClick()}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="svg-icon">
                          <EthereumIcon />
                        </div>
                        <div className="mt-2 payment-option-title">
                          Pay with ETH(Testnet)
                        </div>
                      </div>
                    </li>
                    <li className="nav-item col-6" role="presentation">
                      <div
                        className={`payment-option ${
                          activeTab === "card" ? "active" : ""
                        }`}
                        id="card-tab"
                        role="tab"
                        aria-controls="card"
                        aria-selected={activeTab === "card"}
                        onClick={() => handleCardTabClick()}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="svg-icon">
                          <CreditCardIcon />
                        </div>
                        <div className="mt-2 payment-option-title">
                          Pay with Card
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="tab-content mt-4" id="paymentTabContent">
                    <div
                      className={`tab-pane fade ${
                        isCardTabOpened ? "show active" : ""
                      }`}
                      id="card"
                      role="tabpanel"
                      aria-labelledby="card-tab"
                    >
                      <div className="mt-2 mb-2">
                        <p className="text-s text-g">
                          You can use the test credit card number{" "}
                          <strong className="text-w">
                            4242 4242 4242 4242
                          </strong>{" "}
                          and any valid information for the other fields to test
                          the credit card flow.
                        </p>
                      </div>
                      {isCardTabOpened && (
                        <CardPurchase
                          key="card-purchase"
                          count={count}
                          setShowCongrats={setShowCongrats}
                          setOrderIdentifier={setOrderIdentifier}
                          setQuoteMessage={setQuoteMessage}
                        />
                      )}
                    </div>
                    <div
                      className={`tab-pane fade mb ${
                        isCryptoTabOpened ? "show active" : ""
                      }`}
                      id="crypto"
                      role="tabpanel"
                      aria-labelledby="crypto-tab"
                    >
                      {isCryptoTabOpened && (
                        <WalletConnect
                          count={count}
                          setShowCongrats={setShowCongrats}
                          setOrderIdentifier={setOrderIdentifier}
                          setQuoteMessage={setQuoteMessage}
                        />
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <TrendingSongs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
