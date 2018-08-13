import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { newHand, holdCard, dealNextCards } from "./actions/index";

class DealBtnContainer extends Component {
    handleButton() {
        if (this.props.endOfRound) {
            this.props.newHand();
        } else {
            this.props.dealNextCards();
        }
    }

    render() {
        return <button onClick={this.handleButton.bind(this)}>Deal</button>;
    }
}

const mapDispatchToProps = { newHand, dealNextCards };

const mapStateToProps = (state) => ({
    endOfRound: state.data.endOfRound
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealBtnContainer);
