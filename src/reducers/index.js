import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import uiReducer from "./uiReducer";
export default combineReducers({
    data: dataReducer,
    ui: uiReducer
});
