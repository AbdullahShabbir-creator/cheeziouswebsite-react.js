import React, { useState, useMemo } from 'react';

// Function to simulate an expensive computation
function ExpensiveComputation(value) {
    console.log('Expensive computation is running');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += value;
  }
  return result;
}

// Main Component
function MyComponent() {
  // State hooks for count and inputValue
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  // Memoize the result of the expensive computation
  const computedValue = useMemo(() => ExpensiveComputation(inputValue), [inputValue]);
//    console.log({computedValue})
  return (
    <div>
      <h1>Computed Value: {computedValue}</h1>
      <button onClick={() => setInputValue(inputValue + 1)}>Update Input Value</button>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
