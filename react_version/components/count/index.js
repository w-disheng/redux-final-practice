import React, { useState, useRef } from "react";

function Count() {
  const mySelect = useRef();
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    const value = mySelect.current.value;
    setNumber(number + value * 1);
  };
  const handleDecrement = () => {
    const value = mySelect.current.value;
    setNumber(number - value * 1);
  };
  const handleIncrementIfOdd = () => {
    const value = mySelect.current.value;
    if (number % 2 !== 0) {
      setNumber(number + value * 1);
    }
  };
  const handleAsyncIncrement = () => {
    const value = mySelect.current.value;
    setTimeout(() => {
      setNumber(number + value * 1);
    }, 500);
  };

  return (
    <div>
      <h2>{number}</h2>
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
