import React, { useState, useEffect } from 'react';
import {InitialQuotePayload} from "@crossmint/client-sdk-base";
import {CrossmintEvents, CrossmintPaymentElement} from "@crossmint/client-sdk-react-ui";
import LottiePlayer from 'react-lottie-player';
import TrendingSongs from './TrendingSongs';
import Footer from './Footer';
import PurchaseSummary from './payments/PurchaseSummary';
import CardPurchase from './payments/CardPurchase';
import WalletConnect from './wallet/WalletConnect';

import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";

const Home = () => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [activeTab, setActiveTab] = useState('crypto');
  const [count, setCount] = useState(1);
  const [showCongrats, setShowCongrats] = useState(false);
  const [orderIdentifier, setOrderIdentifier] = useState("");
  const [quoteMessage, setQuoteMessage] = useState(undefined);
  const [isCryptoTabOpened, setIsCryptoTabOpened] = useState(true);
  const [isCardTabOpened, setIsCardTabOpened] = useState(false);


  const handleCardTabClick = () => {
    setIsCardTabOpened(true);
    setIsCryptoTabOpened(false);
    setActiveTab('card');
  };

  const handleCryptoTabClick = () => {
    setIsCryptoTabOpened(true);
    setIsCardTabOpened(false);
    setActiveTab('crypto');
  };

const handlePurchase = () => {
  setIsCryptoTabOpened(true);
  setActiveTab('crypto');
  setIsCardTabOpened(false);
  setShowPurchaseModal(true);
};
  return (
      <div className="container hero py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-3 mb-lg-0 pr-5">
            <h1 className="hero-title mb-3">Your Gateway to Lofi Bliss</h1>
            <p className="hero-text mb-3">This is a demo of Crossmint’s custom embedded checkout, a fully customizable iframe seamlessly integrated onto your website.</p>
            </div>
          <div className="col-lg-6">
          
           <div className="contain-right">
            <div className="card">
            <a onClick={() => handlePurchase()}>
              <img src="/nft-img.gif" className="card-img-top nft-image" alt="NFT" />
            </a>
              <div className="card-body">
                <h5 className="card-title mt-2 mb-2">Test NFT Collection</h5>
                <p class="card-text">This is a Test Collection by Crossmint. Secure your NFT with ease using ETH (testnet) or Card payments and claim this NFT for free now!</p>
                <div className="row align-items-center">
                  <div className="col">
                  <div className="price-title">
                  Price
                  </div>
                    <span className="price">$1.25</span> <span className="original-price">$2.0</span><span className="discount">37.5% Off</span>
                  </div>
                  <div className="col text-end">
                    <button className="btn btn-main" onClick={() => handlePurchase()}>Collect</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      {showPurchaseModal && <div className="modal-backdrop"></div>}
      <div className={`modal ${showPurchaseModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showPurchaseModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order summary</h5>
              <button type="button" className="btn-close" onClick={() => setShowPurchaseModal(false)}></button>
            </div>

            <div className="modal-body">
            {showCongrats ? (
              <div className="purchase-successful">
                  <LottiePlayer 
                    path="/success.json"
                    play
                    style={{ width: '300px', height: '300px', display : 'block', margin : '0 auto' }}
                  />
                <h3 className="successful-purchase center-text">Purchase Successful!</h3>
                <p className="text-general mb-2">Your transaction has been completed successfully. You can now view your NFT in your wallet.</p>
              </div>
              ) : (
              <>
              <div className="row mb-3">
                {quoteMessage != null ? <PurchaseSummary initialQuotePayload={quoteMessage}/> : ""}
              </div>

              <ul className="nav nav-tabs row g-2" id="paymentTab" role="tablist">
                <li className="nav-item col-6" role="presentation">
                  <div 
                    className={`payment-option ${activeTab === 'crypto' ? 'active' : ''}`} 
                    id="crypto-tab" 
                    role="tab" 
                    aria-controls="crypto" 
                    aria-selected={activeTab === 'crypto'} 
                    onClick={() => handleCryptoTabClick()}
                    style={{ cursor: 'pointer' }}
                  >
                  <div className="svg-icon"><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                  d="M4 9C4 8.44772 4.44772 8 5 8H9C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9Z"
                  fill="currentColor"
                  />
                  <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 3C1.79086 3 0 4.79086 0 7V17C0 19.2091 1.79086 21 4 21H20C22.2091 21 24 19.2091 24 17V7C24 4.79086 22.2091 3 20 3H4ZM20 5H4C2.89543 5 2 5.89543 2 7V14H22V7C22 5.89543 21.1046 5 20 5ZM22 16H2V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V16Z"
                  fill="currentColor"
                  />
                  </svg>
                  </div>
                  <div className="mt-2 payment-option-title">Pay with ETH(Testnet)</div>
                  </div>
                </li>
                <li className="nav-item col-6" role="presentation">
                  <div 
                    className={`payment-option ${activeTab === 'card' ? 'active' : ''}`} 
                    id="card-tab" 
                    role="tab" 
                    aria-controls="card" 
                    aria-selected={activeTab === 'card'} 
                    onClick={() => handleCardTabClick()}
                    style={{ cursor: 'pointer' }}
                  >
                  <div className="svg-icon"><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                  d="M4 9C4 8.44772 4.44772 8 5 8H9C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9Z"
                  fill="currentColor"
                  />
                  <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 3C1.79086 3 0 4.79086 0 7V17C0 19.2091 1.79086 21 4 21H20C22.2091 21 24 19.2091 24 17V7C24 4.79086 22.2091 3 20 3H4ZM20 5H4C2.89543 5 2 5.89543 2 7V14H22V7C22 5.89543 21.1046 5 20 5ZM22 16H2V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V16Z"
                  fill="currentColor"
                  />
                  </svg>
                  </div>
                  <div className="mt-2 payment-option-title">Pay with Card</div>
                  </div>
                </li>                
              </ul>

              <div className="tab-content mt-4" id="paymentTabContent">
                <div className={`tab-pane fade ${isCardTabOpened ? 'show active' : ''}`} id="card" role="tabpanel" aria-labelledby="card-tab">
                  <div className="mt-2 mb-2">
                    <p className="text-s text-g">NFTs on this collection are free. To buy them, use the following credit card number - 4242 4242 4242 4242 and enter random information.</p>
                  </div>
                  {isCardTabOpened && <CardPurchase key="card-purchase" count={count} setShowCongrats={setShowCongrats} setOrderIdentifier={setOrderIdentifier} setQuoteMessage={setQuoteMessage} />}
                </div>
              <div className={`tab-pane fade mb ${isCryptoTabOpened ? 'show active' : ''}`} id="crypto" role="tabpanel" aria-labelledby="crypto-tab">
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
