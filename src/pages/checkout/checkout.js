import React from 'react';
import './checkout.scss';
import { images } from '../../constants';

function Checkout() {
  return (
    <main className="checkout-bg">
      <div className="main checkout">
        <div className="cart">
          <img src={images.adCheckout} className="cart__ad" alt="ad" />
          <div className="cart__items">
            <h1>Shopping Cart</h1>
          </div>
        </div>
        <div className="total">
          <p>Subtotal</p>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
