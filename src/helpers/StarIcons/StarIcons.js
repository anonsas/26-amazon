import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

function StarIcons({ rating }) {
  const [ratingStars] = useState(Math.ceil(rating));

  return (
    <div className="stars-container">
      {Array(ratingStars)
        .fill()
        .map((_, i) => (
          <StarIcon
            key={i}
            className="star-icon"
            style={{ height: '2rem', color: '#febd69' }}
          />
        ))}
    </div>
  );
}

export default StarIcons;
