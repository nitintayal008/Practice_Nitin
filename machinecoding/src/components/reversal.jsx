import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(5);
  const [isRunning, setIsRunning] = useState(false); 
  const [direction, setDirection] = useState('down');

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount === 5 && direction === 'up') {
            setDirection('down');
            return prevCount - 1;
          } else if (prevCount === 0 && direction === 'down') {
            setDirection('up');
            return prevCount + 1;
          } else if (direction === 'down') {
            return prevCount - 1;
          } else {
            return prevCount + 1; 
          }
        });
      }, 1000);
    }
    console.log("rvfrv",interval);
    return () => clearInterval(interval);

  }, [isRunning, direction]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Counter;
