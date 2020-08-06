import React from 'react';
import Rater from 'react-rater';

import './styles.scss';

const Rating = ({
  label,
  setRating,
  className,
  regularRating,
  total = 5,
  interactive = true,
}) => (
  <div className={`d-flex align-items-center ${className}`}>
    {label && <strong className="mr-2">{label}</strong>}
    <Rater
      {...{
        total,
        interactive,
        rating: regularRating,
        onRate: ({ rating }) => {
          if (regularRating === rating) {
            setRating && setRating(null);
          } else {
            setRating && setRating(rating * 2);
          }
        },
      }}
    />
  </div>
);

export default Rating;
