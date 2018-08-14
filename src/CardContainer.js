import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import CardHold from "./CardHold";
import { holdCard, cardImageLoaded } from "./actions/index";
import "./CardContainer.css";

class CardContainer extends Component {
    handleCardClick(id) {
        if (!this.props.roundEnded) this.props.holdCard(id);
    }
    handleCardLoad(id) {
        this.props.cardImageLoaded(id);
    }

    render() {
        let cards = this.props.hand;
        return (
            <div className="cardContainer">
                {Object.keys(cards).map((key) => {
                    return (
                        <div key={key}>
                            <CardHold hold={cards[key].hold} />
                            <Card
                                id={key}
                                card={cards[key]}
                                onClick={this.handleCardClick.bind(this)}
                                onLoad={this.handleCardLoad.bind(this)}
                            />
                            ;
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapDispatchToProps = { holdCard, cardImageLoaded };

const mapStateToProps = (state) => ({
    hand: state.data.hand,
    roundEnded: state.data.roundEnded
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardContainer);
