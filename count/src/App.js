import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state for the counter
  const [count, setCount] = useState(0);

  // Function to increase the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrease the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
