// CountContext.js
import React, { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export const useCount = () => useContext(CountContext);

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// App.js
import React from 'react';
import { CountProvider, useCount } from './CountContext';

const Counter = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const App = () => (
  <CountProvider>
    <Counter />
  </CountProvider>
);

export default App;