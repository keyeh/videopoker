import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import uiReducer from "./uiReducer";
import creditReducer from "./creditReducer";

export default combineReducers({
    data: dataReducer,
    ui: uiReducer,
    credit: creditReducer
});
