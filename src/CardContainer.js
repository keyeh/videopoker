import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { newHand, holdCard, dealNextCards } from "./actions/index";

class CardContainer extends Component {
    handleCardClick(id) {
        if (!this.props.endOfRound) this.props.holdCard(id);
    }

    render() {
        let cards = this.props.hand;
        return (
            <div>
                {Object.keys(cards).map((key) => {
                    return <Card key={key} id={key} card={cards[key]} onClick={this.handleCardClick.bind(this)} />;
                })}
            </div>
        );
    }
}

const mapDispatchToProps = { holdCard };

const mapStateToProps = (state) => ({
    hand: state.data.hand,
    endOfRound: state.data.endOfRound
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardContainer);
