import React, { useState } from "react";

function Counter() {
  //set setter function and reference to current value of state
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
