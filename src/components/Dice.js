import React from 'react';

const Dice = ({ value }) => {
  const imagePath = process.env.PUBLIC_URL + `/images/dice-${value}.png`;

  return (
    <div className="dice">
      <img src={imagePath} alt={`Кубик: ${value}`} />
    </div>
  );
};

export default Dice;
