import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { newHand, holdCard, dealNextCards, subtractCredits } from "./actions/index";

class DealBtnContainer extends Component {
    handleButton() {
        if (this.props.roundEnded) {
            this.props.newHand();
            this.props.subtractCredits();
        } else {
            this.props.dealNextCards();
        }
    }

    render() {
        return <button onClick={this.handleButton.bind(this)}>Deal</button>;
    }
}

const mapDispatchToProps = { newHand, dealNextCards, subtractCredits };

const mapStateToProps = (state) => ({
    roundEnded: state.data.roundEnded
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealBtnContainer);
