import React, { Component } from "react";
import "./styles/App.css";
import CardContainer from "./components/CardContainer";
import DealBtnContainer from "./components/DealBtnContainer";
import SoundBtnContainer from "./components/SoundBtnContainer";
import WinContainer from "./components/WinContainer";
import HandStatusContainer from "./components/HandStatusContainer";
import PayTableContainer from "./components/PayTableContainer";
import CreditContainer from "./components/CreditContainer";
import ImagePreload from "./components/ImagePreload";

import logo from "./logo.svg";
class App extends Component {
    render() {
        return (
            <main className="App">
                <ImagePreload />
                <PayTableContainer />
                <section className="hand">
                    <HandStatusContainer />
                    <CardContainer />
                </section>
                <section className="bottomRow padded">
                    <span className="bet">BET 5</span>
                    <WinContainer />
                    <CreditContainer />
                </section>
                <section className="buttonRow">
                    <button>HELP</button>
                    <SoundBtnContainer />
                    <img className="logo" src={logo} alt="logo" />
                    <DealBtnContainer />
                </section>
            </main>
        );
    }
}

export default App;
