import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeItem }) => {
  return (
    <article>
      {tours.map((tour) => {
        return <Tour tour={tour} key={tour.id} removeItem={removeItem} />;
      })}
    </article>
  );
};

export default Tours;
