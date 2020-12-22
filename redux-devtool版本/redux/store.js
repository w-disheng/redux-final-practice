import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";

const allReducers = combineReducers({
  count: countReducer,
  person: personReducer,
});

export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
