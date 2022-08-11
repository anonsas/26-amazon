import React from 'react';
import './ProductFeed.scss';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Product from './Product';
import { images } from '../../constants';

function ProductFeed() {
  const fetchProducts = () => {
    return axios.get('https://fakestoreapi.com/products');
  };

  const { isLoading, data, isError, error, isFetching } = useQuery(
    ['product'],
    fetchProducts
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error}</h2>;
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

      <img src={images.adHomepage} className="products-ads" alt="ad" />

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
