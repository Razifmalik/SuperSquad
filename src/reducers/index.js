import { combineReducers } from "redux";
import characters from "./characters_reducers";
import heroes from "./heros_reducers";

const rootReducer = combineReducers({
  characters,
  heroes
});

export default rootReducer;
