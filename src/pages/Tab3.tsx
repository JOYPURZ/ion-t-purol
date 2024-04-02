// Tab3.jsx
import React, { useState } from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
};

export default Tab3;
