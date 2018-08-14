import { UI_CARD_IMAGE_LOADED, UI_CARD_REVEAL, UI_CARD_RESET } from "./index";
import { revealCardSound } from "../sounds";

export const cardImageLoaded = () => {
    return {
        type: UI_CARD_IMAGE_LOADED
    };
};
export const hideDiscardedCards = () => {
    // hide everything except for the held cards
    return function(dispatch, getState) {
        let { hand } = getState().data;
        for (let key in hand) {
            if (!hand[key].hold) {
                dispatch({ type: UI_CARD_RESET, payload: key });
            }
        }
    };
};
export const revealCards = () => {
    return (dispatch, getState) => {
        let cardRevealState = getState().ui.cardRevealed;
        let toReveal = Object.keys(cardRevealState).filter(function(key) {
            return !cardRevealState[key];
        });
        let ms = 0;
        for (let i of toReveal) {
            setTimeout(() => {
                dispatch({
                    type: UI_CARD_REVEAL,
                    payload: i
                });
                revealCardSound();
            }, ms);
            ms += 110;
        }
    };
};
