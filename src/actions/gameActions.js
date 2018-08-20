import { NEW_HAND, HOLD_CARD, DEAL_NEXT_CARDS, hideDiscardedCards, ADD_CREDIT, SUBTRACT_CREDIT } from "./index";
import CardList from "../lib/CardList";
import _ from "lodash";

export const newHand = () => {
    // Create a new 52 card poker deck
    let deck = _.shuffle(CardList);
    // get hand of 5 cards
    let hand = [];
    for (let i = 0; i < 5; i++) {
        hand[i] = deck.pop();
    }
    return {
        type: NEW_HAND,
        payload: { hand, deck }
    };
};

export const holdCard = (index) => {
    return (dispatch, getState) => {
        dispatch({
            type: HOLD_CARD,
            payload: index
        });
    };
};

export const dealNextCards = () => {
    return (dispatch, getState) => {
        let deck = getState().data.deck;
        let hand = [...getState().data.hand];
        for (let i = 0; i < 5; i++) {
            if (!getState().data.hold[i]) {
                hand[i] = deck.pop();
            }
        }
        dispatch(hideDiscardedCards());
        dispatch({
            type: DEAL_NEXT_CARDS,
            payload: { hand, deck }
        });
    };
};

export const addCredits = () => {
    return (dispatch, getState) => {
        dispatch({ type: ADD_CREDIT, payload: getState().data.handWin.win });
    };
};
export const subtractCredits = () => {
    return (dispatch, getState) => {
        dispatch({ type: SUBTRACT_CREDIT, payload: 5 });
    };
};
