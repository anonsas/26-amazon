import React from 'react';
import './Banner.scss';
import { images } from '../../constants';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner__gradient" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src={images.banner1} alt="banner" />
        </div>
        <div>
          <img src={images.banner2} alt="banner" />
        </div>
        <div>
          <img src={images.banner3} alt="banner" />
        </div>
        <div>
          <img src={images.banner4} alt="banner" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
