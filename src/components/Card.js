import React from 'react';

const Card = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <>
          <div key={Math.random() * 999}>{card.game}</div>
          <div key={Math.random() * 1000}>{card.name}</div>
          <div key={Math.random() * 900}>{card.specialPower}</div>
        </>
      ))}
    </div>
  );
};

export default Card;
