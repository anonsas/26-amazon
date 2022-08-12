import React from 'react';
import CurrencyFormat from 'react-currency-format';
import ClampLines from 'react-clamp-lines';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { StarIcons } from '../index';

function Product({ id, title, price, description, category, image, rating }) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = { id, title, price, description, category, image, rating };
    dispatch(addToCart(product));
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
    </div>
  );
}

export default Product;
