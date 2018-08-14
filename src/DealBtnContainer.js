import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { newHand, holdCard, dealNextCards, revealCards, subtractCredits, addCredits } from "./actions/index";

class DealBtnContainer extends Component {
    handleButton() {
        if (this.props.roundEnded) {
            this.props.subtractCredits();
            this.props.newHand();
            this.props.revealCards();
        } else {
            this.props.dealNextCards();
            this.props.revealCards();
            this.props.addCredits();
        }
    }

    render() {
        return <button onClick={this.handleButton.bind(this)}>Deal</button>;
    }
}

const mapDispatchToProps = { newHand, dealNextCards, revealCards, subtractCredits, addCredits };

const mapStateToProps = (state) => ({
    roundEnded: state.data.roundEnded
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealBtnContainer);
