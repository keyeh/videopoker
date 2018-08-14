import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import CardHold from "./CardHold";
import { holdCard, cardImageLoaded } from "./actions/index";

class PayTableContainer extends Component {
    render() {
        let cards = this.props.hand;
        return (
            <div className="payTableContainer">
                <div style={{ width: "100%", height: "25vh", border: "1px solid red" }} />
            </div>
        );
    }
}

const mapDispatchToProps = { holdCard, cardImageLoaded };

const mapStateToProps = (state) => ({
    hand: state.data.hand,
    roundEnded: state.data.roundEnded,
    cardRevealed: state.ui.cardRevealed
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PayTableContainer);
