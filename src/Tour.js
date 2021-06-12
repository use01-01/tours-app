import React, { useState } from 'react';

const Tour = ({ tour, removeItem }) => {
  const { id, image, info, name, price } = tour;
  const [isReadMoreActive, setIsReadMoreActive] = useState(true);

  return (
    <div
      className="item"
      key={id}
      style={{
        border: '1px solid black',
        marginBottom: '5px',
        objectFit: 'cover',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: '100%', height: '237.9px' }}
      />
      <h3>{name}</h3>
      <h5>{price}</h5>
      <h4>
        {isReadMoreActive ? info.substring(0, 100) : info}
        <button
          onClick={() => setIsReadMoreActive(!isReadMoreActive)}
          className="button-show"
        >
          {isReadMoreActive ? '...read more' : 'show less'}
        </button>
      </h4>
      <button onClick={() => removeItem(id)}>not interested</button>
    </div>
  );
};

export default Tour;
