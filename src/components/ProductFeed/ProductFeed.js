import React from 'react';
import './ProductFeed.scss';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Product from './Product';
import { images } from '../../constants';
import Loader from '../../helpers/Loader/Loader';

function ProductFeed() {
  const fetchProducts = () => axios.get('https://fakestoreapi.com/products');

  const { isLoading, data, isError, error } = useQuery(['product'], fetchProducts);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div style={{ margin: '2rem' }}>
        <h3>Something went wrong: {error.message}</h3>
        <h4>Please try to reload the page</h4>
      </div>
    );
  }

  return (
    <section className="products-container">
      {data.data
        ?.slice(0, 4)
        .map(({ id, title, price, description, category, image, rating: { rate } }) => (
          <Product
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            rating={rate}
          />
        ))}

      <img src={images.adHomepage} className="products-ad" alt="ad" />

      <div className="products-item-span-2">
        {data.data
          ?.slice(4, 5)
          .map(({ id, title, price, description, category, image, rating: { rate } }) => (
            <Product
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              category={category}
              image={image}
              rating={rate}
            />
          ))}
      </div>

      {data.data
        ?.slice(5)
        .map(({ id, title, price, description, category, image, rating: { rate } }) => (
          <Product
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            rating={rate}
          />
        ))}
    </section>
  );
}

export default ProductFeed;
