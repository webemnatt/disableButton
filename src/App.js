import React, { useState } from 'react';
import './style.scss';

export default function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div>
      <button
        disabled={activeButton === 'button1'}
        onClick={() => handleButtonClick('button1')}
      >
        Botão 1
      </button>
      <button
        disabled={activeButton === 'button2'}
        onClick={() => handleButtonClick('button2')}
      >
        Botão 2
      </button>
      <button
        disabled={activeButton === 'button3'}
        onClick={() => handleButtonClick('button3')}
      >
        Botão 3
      </button>
    </div>
  );
}
