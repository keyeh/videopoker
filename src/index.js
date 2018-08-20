/* globals lowLag */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./store";

import viewportUnitsBuggyfill from "viewport-units-buggyfill";

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOMContentLoaded");
    viewportUnitsBuggyfill.init();
    lowLag.init();
    lowLag.load("sounds/cardHold.mp3");
    lowLag.load("sounds/cardReveal.mp3");
    lowLag.load("sounds/win1.mp3");
    lowLag.load("sounds/win2.mp3");
});

window.ondragstart = function() {
    return false;
};
