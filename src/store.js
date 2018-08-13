import { createStore } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

export default function configureStore() {
    return createStore(
        rootReducer, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
