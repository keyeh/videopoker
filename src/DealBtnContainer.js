import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { newHand, holdCard, dealNextCards } from "./actions/index";

class DealBtnContainer extends Component {
    handleButton() {
        if (this.props.roundEnded) {
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
    roundEnded: state.data.roundEnded
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealBtnContainer);
