import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cartSlice';
import { StarIcons } from '../../components';
import ClampLines from 'react-clamp-lines';
import CurrencyFormat from 'react-currency-format';

function CheckoutProduct({ id, title, price, description, image, rating }) {
  const dispatch = useDispatch();
  const removeItemFromCart = () => dispatch(removeFromCart(id));

  return (
    <div className="cart-product">
      <img src={image} alt={title} className="img" />

      <div className="info">
        <p className="info__title">{title}</p>
        <StarIcons rating={rating} />
        <ClampLines
          text={description}
          lines={3}
          ellipsis="..."
          moreText={false}
          lessText={false}
          className="info__desc"
          innerElement="p"
        />
        <CurrencyFormat
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'€'}
        />
      </div>

      <div className="actions">
        <button className="link" onClick={removeItemFromCart}>
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
