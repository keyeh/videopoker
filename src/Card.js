import React from "react";

let getCard = (cardName) => {
    return `https://unpkg.com/cardsJS/cards/${cardName}.svg`;
};

export default (props) => (
    <div>
        <img
            className="card"
            src={getCard(`${props.card.value}${props.card.suit[0].toUpperCase()}`)}
            alt={`${props.card.value} of ${props.card.suit}s`}
            onClick={() => props.onClick(props.id)}
            onLoad={() => props.onLoad(props.id)}
        />
    </div>
);
