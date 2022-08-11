import React from 'react';
import './homepage.scss';
import { Banner, ProductFeed } from '../../components/index';

function Homepage() {
  return (
    <main className="main">
      <Banner />
      <ProductFeed />
    </main>
  );
}

export default Homepage;
