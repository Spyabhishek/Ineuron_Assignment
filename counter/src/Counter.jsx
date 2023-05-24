import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  };

  const decrement = () => {
    setCount(count-1);
  };

  return (
    <div className="container">
      <h2>Counter App</h2>
      <div>
        <button className="button decrement" onClick={decrement}>-</button>
        <span className="counter">{count}</span>
        <button className="button increment" onClick={increment}>+</button>
      </div>
    </div>
  );  
};

export default Counter;
