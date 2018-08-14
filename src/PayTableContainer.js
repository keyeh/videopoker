import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import CardHold from "./CardHold";
import { holdCard } from "./actions/index";

class PayTableContainer extends Component {
    render() {
        let cards = this.props.hand;
        return <div className="payTableContainer" />;
    }
}

const mapDispatchToProps = { holdCard };

const mapStateToProps = (state) => ({
    hand: state.data.hand,
    roundEnded: state.data.roundEnded,
    cardRevealed: state.ui.cardRevealed
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PayTableContainer);
