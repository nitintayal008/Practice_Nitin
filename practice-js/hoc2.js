// Render Props Approach

import React from 'react';

// HOC ClickTrackingHOC
const withClickTracking = (props) => {
  const handleClick = () => {
    console.log('Click tracked:', props.trackingInfo);
  };

  return (
    <div onClick={handleClick}>
      {props.children}
    </div>
  );
};

// Original component
const Button = (props) => {
  return <button>{props.label}</button>;
};

const App = () => {
  return (
    <div>
      <h1>Render Props Example</h1>
      // Applying the HOC to the original component
      <withClickTracking trackingInfo="Button 1">
        <Button label="Click Me" />
      </withClickTracking>
      <withClickTracking trackingInfo="Button 2">
        <Button label="Click Me Too" />
      </withClickTracking>
    </div>
  );
};

export default App;

