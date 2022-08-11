import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import CurrencyFormat from 'react-currency-format';
import ClampLines from 'react-clamp-lines';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

function Product({ id, title, price, description, category, image, rating }) {
  const dispatch = useDispatch();

  const [ratingStars] = useState(Math.ceil(rating));

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

      <div className="product__icons">
        {Array(ratingStars)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="product__icon" />
          ))}
      </div>

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
