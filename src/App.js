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
class App extends Component {
    render() {
        return (
            <div className="App">
                <ImagePreload />
                <PayTableContainer />
                <HandStatusContainer />
                <CardContainer />
                <div className="bottomRow">
                    <span style={{ textAlign: "left" }}>BET 5</span>
                    <WinContainer />
                    <CreditContainer />
                </div>
                <div className="buttonRow">
                    <button />
                    <SoundBtnContainer />
                    <button />
                    <button />
                    <button />
                    <button />
                    <DealBtnContainer />
                </div>
            </div>
        );
    }
}

export default App;