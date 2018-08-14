import { UI_CARD_IMAGE_LOADED, UI_CARD_REVEAL, UI_CARD_RESET, NEW_HAND, HOLD_CARD } from "../actions/index";
let defaultState = {
    cardImageLoaded: { 0: false, 1: false, 2: false, 3: false, 4: false },
    cardRevealed: { 0: false, 1: false, 2: false, 3: false, 4: false }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NEW_HAND:
            return defaultState;
        case UI_CARD_IMAGE_LOADED:
            return {
                ...state,
                cardImageLoaded: { ...state.cardImageLoaded, [action.payload]: true }
            };
        case UI_CARD_REVEAL:
            return {
                ...state,
                cardRevealed: { ...state.cardRevealed, [action.payload]: true }
            };
        case UI_CARD_RESET:
            return {
                ...state,
                cardRevealed: { ...state.cardRevealed, [action.payload]: false },
                cardImageLoaded: { ...state.cardImageLoaded, [action.payload]: false }
            };
        default:
            return state;
    }
};
