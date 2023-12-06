import { combineReducers } from "redux";
import { weather } from "./weather";

const rootReducers = combineReducers({
  [weather.reducerPath]: weather.reducer,
});

export default rootReducers;
