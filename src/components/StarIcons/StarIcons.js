import React, { useState } from 'react';
import './StarIcons.scss';
import { StarIcon } from '@heroicons/react/solid';

function StarIcons({ rating }) {
  const [ratingStars] = useState(Math.ceil(rating));

  return (
    <div className="stars-container">
      {Array(ratingStars)
        .fill()
        .map((_, i) => (
          <StarIcon key={i} className="star-icon" />
        ))}
    </div>
  );
}

export default StarIcons;
