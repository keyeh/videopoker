import React from "react";
const IMG_BASE = "cards/";
let getCardUrl = (cardName) => {
    return `${IMG_BASE}${cardName.toUpperCase()}.svg`;
};

export default (props) => {
    if (props.card && props.revealed) {
        return (
            <img
                className="card"
                src={getCardUrl(props.card)}
                alt={`${props.card.value} of ${props.card.suit}s`}
                onClick={() => props.onClick(props.id)}
            />
        );
    } else {
        return <img className="card" src={IMG_BASE + "RED_BACK.svg"} alt="Back of playing card" />;
    }
};
