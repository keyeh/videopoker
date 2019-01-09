import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import uiReducer from "./uiReducer";
import creditReducer from "./creditReducer";

export default combineReducers({
    game: gameReducer,
    ui: uiReducer,
    credit: creditReducer
});
