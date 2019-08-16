import React, { useState } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  const WithCounter = props => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + incrementNumber);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
  return WithCounter;
};

export default withCounter;
