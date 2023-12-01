import React from 'react';

const PurchaseSummary = ({ initialQuotePayload }) => {
  if (!initialQuotePayload) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row g-0">
        <div className="col-12">
          <div className="order-summary">
            {initialQuotePayload.lineItems.map((item, index) => (
              <div key={index} className={`row ${index !== initialQuotePayload.lineItems.length - 1 ? 'border-bottom' : ''} pb-2 pt-2 g-3`}>
                <div className="col-3">
                  <img
                    src={item.metadata.imageUrl}
                    alt={`${item.metadata.title} image`}
                    className="check-out-nft"
                  />
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-8">
                      <div className="nft-title">Midnight Whispers in the City</div>
                    </div>
                    <div className="col-4">
                      <div className="price-approx">{initialQuotePayload.totalPrice.amount} <span className="small-currency">{initialQuotePayload.totalPrice.currency.toUpperCase()}</span></div>
                    </div>  
                  </div>
                  <div className="row">
                    <div className="col-7">
                      <div className="creator-text">By Crossmint</div>
                    </div>
                    <div className="col-5">
                      <div className="creator-text right">x {item.quantity}</div>
                    </div>  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="pt-4 border-divider">
            <div className="row pb-4">
              <div className="col-7">
                <div className="total-price">Total Amount</div>
              </div>
              <div className="col-5">
                <div className="price-approx right">{initialQuotePayload.totalPrice.amount} {initialQuotePayload.totalPrice.currency.toUpperCase()}</div>
              </div>  
            </div>
            <div className="border-divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSummary;
