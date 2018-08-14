import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { holdCard } from "./actions/index";
import "./CardContainer.css";

class CardContainer extends Component {
    handleCardClick(id) {
        if (!this.props.roundEnded) this.props.holdCard(id);
    }

    render() {
        let cards = this.props.hand;
        return (
            <div className="cardContainer">
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
    roundEnded: state.data.roundEnded
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardContainer);
