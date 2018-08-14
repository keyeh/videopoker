import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { newHand, holdCard, dealNextCards, revealCards } from "./actions/index";
import CardContainer from "./CardContainer";
import DealBtnContainer from "./DealBtnContainer";
import SoundBtnContainer from "./SoundBtnContainer";
import WinContainer from "./WinContainer";
import HandStatusContainer from "./HandStatusContainer";
import PayTableContainer from "./PayTableContainer";
import CreditContainer from "./CreditContainer";
import ImagePreload from "./ImagePreload";
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {}
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

const mapDispatchToProps = { newHand, holdCard, dealNextCards, revealCards };

const mapStateToProps = (state) => ({
    ...state
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
