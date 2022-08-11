import React from 'react';
import './checkout.scss';
import { images } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cartSlice';

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeItemFromCart = () => {};

  return (
    <main className="checkout-bg">
      <div className="main checkout">
        <div className="cart">
          <img src={images.adCheckout} className="cart__ad" alt="ad" />
          <div className="cart__items">
            <h1>{items.length ? 'Shopping Cart' : 'Your Amazon Basket Is Empty'} </h1>

            {/* {items?.map((item, i) => (

            ))} */}
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
