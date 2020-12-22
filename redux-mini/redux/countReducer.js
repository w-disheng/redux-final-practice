const initState = 0;

export default function countReducer(prevState = initState, action) {
  switch (action.type) {
    case "increment":
      return action.data + prevState;
    case "decrement":
      return prevState - action.data;
    default:
      return prevState;
  }
}
