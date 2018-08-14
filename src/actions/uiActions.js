import { UI_CARD_IMAGE_LOADED, UI_CARD_REVEAL, UI_CARD_RESET } from "./index";

export const cardImageLoaded = (i) => {
    return function(dispatch, getState) {
        dispatch({
            type: UI_CARD_IMAGE_LOADED,
            payload: i
        });
        // if all are done loading, reveal cards
        if (Object.values(getState().ui.cardImageLoaded).every((val) => val)) {
            dispatch(revealCards());
        }
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
    return function(dispatch) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                dispatch({
                    type: UI_CARD_REVEAL,
                    payload: i
                });
            }, (i + 1) * 100);
        }
    };
};
