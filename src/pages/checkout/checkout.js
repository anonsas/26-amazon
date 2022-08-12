import React from 'react';
import './checkout.scss';
import { images } from '../../constants';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const items = useSelector((state) => state.cart.items);

  return (
    <main className="checkout-bg">
      <div className="main checkout">
        <div className="cart">
          <img src={images.adCheckout} className="cart__ad" alt="ad" />
          <div className="cart__items">
            <h1>{items.length ? 'Shopping Cart' : 'Your Amazon Basket Is Empty'} </h1>
            {items?.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
              />
            ))}
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
