import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { newHand, holdCard, dealNextCards } from "./actions/index";
import CardContainer from "./CardContainer";
import DealBtnContainer from "./DealBtnContainer";
import WinContainer from "./WinContainer";
import HandStatusContainer from "./HandStatusContainer";
class App extends Component {
    constructor(props) {
        super(props);

        this.props.newHand();
        // this.props.holdCard(1);
        // this.props.dealNextCards();
    }
    componentWillMount() {}
    render() {
        return (
            <div className="App">
                <CardContainer />
                <DealBtnContainer />
                <br />
                <HandStatusContainer />
                <br />
                <WinContainer />
            </div>
        );
    }
}

const mapDispatchToProps = { newHand, holdCard, dealNextCards };

const mapStateToProps = (state) => ({
    ...state
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
