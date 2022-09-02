import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../setup/redux/features/cartSlice';
import { StarIcons } from '../../components';
import ClampLines from 'react-clamp-lines';
import CurrencyFormat from 'react-currency-format';
import { ToastContainer, toast } from 'react-toastify';

function CheckoutProduct({ id, title, price, description, image, rating }) {
  const notify = () =>
    toast.success('Item removed from cart!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromCart(id));
    notify();
  };

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
        <ToastContainer />
      </div>
    </div>
  );
}

export default CheckoutProduct;
