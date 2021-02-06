import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const logger = store => next => action => {
  let result = next(action);
  return result
}

export default function getStore() {
  const store = createStore(
    reducers,
    undefined,
    applyMiddleware(logger,thunk)
  );

  return store;
  // return createStore(reducers);
}