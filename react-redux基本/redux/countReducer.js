import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

export default function countReducer(prevState = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return action.data + prevState;
    case DECREMENT:
      return prevState - action.data;
    default:
      return prevState;
  }
}
