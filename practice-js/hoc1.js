// Passing the Original Component as a Parameter

import React from 'react';

// HOC ClickTrackingHOC
const withClickTracking = (WrappedComponent) => {
  return (props) => {
    const handleClick = () => {
      console.log('Click tracked:', props.trackingInfo);
    };

    return (
      <div onClick={handleClick}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// Original component
const Button = (props) => {
  return <button>{props.label}</button>;
};

// Applying the HOC to the original component
const ButtonWithClickTracking = withClickTracking(Button);

const App = () => {
  return (
    <div>
      <h1>HOC Example</h1>
      <ButtonWithClickTracking label="Click Me" trackingInfo="Button 1" />
      <ButtonWithClickTracking label="Click Me Too" trackingInfo="Button 2" />
    </div>
  );
};

export default App;
