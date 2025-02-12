import React, { useState } from 'react';
import Dice from './components/Dice';
import './App.css';

function App() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1; 
    setDiceValue(randomValue);
  };

  return (
    <div className="App">
      <h1>Игральная кость</h1>
      <Dice value={diceValue} />
      <button onClick={rollDice}>Бросить кубик</button>
    </div>
  );
}

export default App;
