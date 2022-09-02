import React from 'react';
import './checkout.scss';
import { images } from '../../constants';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import { selectItems, selectTotalPrice } from '../../setup/redux/features/cartSlice';

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotalPrice);

  return (
    <main className="checkout-bg">
      <div className="main checkout">
        {/* LEFT-SIDE */}
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
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* RIGHT-SIDE */}
        <div className="total">
          <h2 className="total__title">
            Subtotal ({items.length} items):
            <span>
              <CurrencyFormat
                value={total}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'€'}
              />
            </span>
          </h2>
          {/* link  */}
          <Link to="/login" className="link">
            Sign in to Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
