import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { matchReducer } from "./reducers/matchReducer";
import { composeWithDevTools } from "redux-devtools-extension";
console.log("store")
const rootReducer = combineReducers({
  matches: matchReducer,
});
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))); 
