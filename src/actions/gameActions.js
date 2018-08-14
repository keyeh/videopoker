import Cards from "cards";
import { destructureCard } from "../helpers";
import { NEW_HAND, HOLD_CARD, DEAL_NEXT_CARDS } from "./index";

export const newHand = () => {
    // Create a new 52 card poker deck
    let deck = new Cards.PokerDeck();
    // Shuffle the deck
    deck.shuffleAll();

    // get hand of 5 cards
    let hand = {};
    for (let i = 0; i < 5; i++) {
        hand[i] = destructureCard(deck.draw());
    }

    return {
        type: NEW_HAND,
        payload: { hand, deck }
    };
};

export const holdCard = (index) => {
    return {
        type: HOLD_CARD,
        payload: index
    };
};

export const dealNextCards = () => {
    return {
        type: DEAL_NEXT_CARDS
    };
};
