import React, { useRef } from "react";

import store from "../../redux/store";
import { increment, decrement } from "../../redux/countActions";

function Count() {
  const mySelect = useRef();

  const handleIncrement = () => {
    const value = mySelect.current.value;
    store.dispatch(increment(value * 1));
  };
  const handleDecrement = () => {
    const value = mySelect.current.value;
    store.dispatch(decrement(value * 1));
  };
  const handleIncrementIfOdd = () => {
    const value = mySelect.current.value;
    if (store.getState() % 2 !== 0) {
      store.dispatch(increment(value * 1));
    }
  };
  const handleAsyncIncrement = () => {
    const value = mySelect.current.value;
    setTimeout(() => {
      store.dispatch(increment(value * 1));
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
