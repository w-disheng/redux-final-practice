import { ADD_PERSON } from "../constants";

const initState = [{ id: "001", name: "Gary", age: 18 }];

export default function personReducer(prevState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...prevState];
    default:
      return prevState;
  }
}
