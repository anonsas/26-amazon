import React from 'react';
import CurrencyFormat from 'react-currency-format';
import ClampLines from 'react-clamp-lines';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../setup/redux/features/cartSlice';
import { StarIcons } from '../index';
import { ToastContainer, toast } from 'react-toastify';

function Product({ id, title, price, description, category, image, rating }) {
  const notify = () =>
    toast.success('Item added to cart!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = { id, title, price, description, category, image, rating };
    dispatch(addToCart(product));
    notify();
  };

  return (
    <div className="product">
      <p className="product__category">{category}</p>
      <img src={image} alt={title} className="product__image" />

      <ClampLines
        text={description}
        lines={1}
        ellipsis="..."
        moreText={false}
        lessText={false}
        className="product__title"
        innerElement="h4"
      />

      <StarIcons rating={rating} />

      <ClampLines
        text={description}
        lines={2}
        ellipsis="..."
        moreText={false}
        lessText={false}
        className="product__desc"
        innerElement="p"
      />

      <div className="product__price">
        <CurrencyFormat
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'€'}
        />
      </div>

      <button className="link" onClick={addItemToCart}>
        Add to Cart
      </button>

      <ToastContainer />
    </div>
  );
}

export default Product;
