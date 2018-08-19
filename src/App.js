import React, { Component } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import DealBtnContainer from "./components/DealBtnContainer";
import SoundBtnContainer from "./components/SoundBtnContainer";
import WinContainer from "./components/WinContainer";
import HandStatusContainer from "./components/HandStatusContainer";
import PayTableContainer from "./components/PayTableContainer";
import CreditContainer from "./components/CreditContainer";
import ImagePreload from "./components/ImagePreload";
import viewportUnitsBuggyfill from "viewport-units-buggyfill";
import logo from "./logo.svg";
class App extends Component {
    render() {
        return (
            <div className="App">
                <ImagePreload />
                <PayTableContainer />
                <HandStatusContainer />
                <CardContainer />
                <div className="bottomRow">
                    <span className="bet">BET 5</span>
                    <WinContainer />
                    <CreditContainer />
                </div>
                <div className="buttonRow">
                    <button>HELP</button>
                    <SoundBtnContainer />
                    <img className="logo" src={logo} alt="logo" />
                    <button>&nbsp;</button>
                    <DealBtnContainer />
                </div>
            </div>
        );
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
    viewportUnitsBuggyfill.init();
});
export default App;
