import React, { useRef } from "react";

function Count(props) {
  const mySelect = useRef();

  const handleIncrement = () => {
    const value = mySelect.current.value;
    props.increment(value * 1);
  };
  const handleDecrement = () => {
    const value = mySelect.current.value;
    props.decrement(value * 1);
  };
  const handleIncrementIfOdd = () => {
    const value = mySelect.current.value;
    if (props.count % 2 !== 0) {
      props.increment(value * 1);
    }
  };
  const handleAsyncIncrement = () => {
    const value = mySelect.current.value;
    props.incrementAsync(value * 1);
  };

  return (
    <div>
      <h2>{props.count}</h2>
      <select ref={mySelect}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrementIfOdd}>+ if odd</button>
      <button onClick={handleAsyncIncrement}>async +</button>
    </div>
  );
}

export default Count;
