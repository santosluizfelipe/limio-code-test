import React, { useState } from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ closeModal, basket, removeFromBasket, clearBasket }) => {
  const extractAmount = (priceString) => {
    const match = priceString.match(/£(\d+)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const totalAmount = basket.items.reduce(
    (total, item) => total + extractAmount(item.data.attributes.display_price__limio),
    0
  );

  const handleRemoveFromBasket = (item) => {
    removeFromBasket(item);
  };

  const handleClearBasket = () => {
    clearBasket();
  };

  const handlePay = () => {
    // integrate payment method here e.g: paypal
    console.log('Implement payment logic here...');
  };

  const applyPromoCode = () => {
    // Replace with your promo code validation logic
    const validPromoCodes = ['SUMMER20', 'SAVE10'];
    const promoCodeInput = promoCode.trim().toUpperCase();

    if (validPromoCodes.includes(promoCodeInput)) {
      // Apply discount based on promo code
      if (promoCodeInput === 'SUMMER20') {
        setDiscountAmount(totalAmount * 0.2); // 20% discount
      } else if (promoCodeInput === 'SAVE10') {
        setDiscountAmount(10); // £10 discount
      }
    } else {
      alert('Invalid promo code');
    }
  };

  const removePromoCode = () => {
    setPromoCode('');
    setDiscountAmount(0);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <div className="basket-container">
          <h3>Basket</h3>
          <ul className="basket-items">
            {basket.items.map((item, index) => (
              <li key={index} className="basket-item">
                <div className="item-details">
                  <div className="item-name">{item.data.attributes.display_name__limio}</div>
                  <div className="item-price">£{extractAmount(item.data.attributes.display_price__limio)}</div>
                  <div
                    className="item-description"
                    dangerouslySetInnerHTML={{ __html: item.data.description }}
                  />
                </div>
                <button className="cancel-button" onClick={() => handleRemoveFromBasket(item)} data-cy="remove-item-btn">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </li>
            ))}
          </ul>
          <div className="promo-code-container">
            {discountAmount === 0 ? (
              <>
                <input
                  className="promo-code-input"
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  data-cy="promo-code-input"
                />
                <button className="apply-promo-button" onClick={applyPromoCode} data-cy="promo-code-apply-btn" >
                  Apply
                </button>
              </>
            ) : (
              <div className="promo-applied">
                Promo code applied - <span className="promo-code">{promoCode}</span>{' '}
                <button className="remove-promo-button" onClick={removePromoCode} >
                  Remove
                </button>
              </div>
            )}
          </div>
          <div className="basket-actions">
            <button className="pay-button" onClick={handlePay}>
              Pay Now
            </button>
            <button className="clear-basket-button" onClick={handleClearBasket} data-cy="clear-basket-btn">
              Clear Basket
            </button>
            <div className="total-amount">
              Total Amount to Pay: £{Math.max(totalAmount - discountAmount, 0).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
