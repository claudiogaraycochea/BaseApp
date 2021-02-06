import { combineReducers } from "redux";
import userConstructor from './userReducers';

export default combineReducers({
    userConstructor: userConstructor
  }
);

