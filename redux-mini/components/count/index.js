import React, { useRef } from "react";

import store from "../../redux/store";

function Count() {
  const mySelect = useRef();

  const handleIncrement = () => {
    const value = mySelect.current.value;
    store.dispatch({ type: "increment", data: value * 1 });
  };
  const handleDecrement = () => {
    const value = mySelect.current.value;
    store.dispatch({ type: "decrement", data: value * 1 });
  };
  const handleIncrementIfOdd = () => {
    const value = mySelect.current.value;
    if (store.getState() % 2 !== 0) {
      store.dispatch({ type: "increment", data: value * 1 });
    }
  };
  const handleAsyncIncrement = () => {
    const value = mySelect.current.value;
    setTimeout(() => {
      store.dispatch({ type: "increment", data: value * 1 });
    }, 500);
  };

  return (
    <div>
      <h2>{store.getState()}</h2>
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
