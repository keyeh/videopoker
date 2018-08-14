import { revealCardSound, holdCardSound } from "../sounds";

import {
    UI_CARD_IMAGE_LOADED,
    UI_CARD_REVEAL,
    UI_CARD_RESET,
    NEW_HAND,
    HOLD_CARD,
    UI_SOUND_TOGGLE
} from "../actions/index";
let defaultState = {
    cardImageLoaded: false,
    cardRevealed: { 0: false, 1: false, 2: false, 3: false, 4: false },
    soundOption: true
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NEW_HAND:
            return {
                ...state,
                cardRevealed: { 0: false, 1: false, 2: false, 3: false, 4: false }
            };
        case UI_CARD_IMAGE_LOADED:
            return {
                ...state,
                cardImageLoaded: true
            };
        case HOLD_CARD:
            if (state.soundOption) {
                holdCardSound();
            }
            return state;
        case UI_CARD_REVEAL:
            if (state.soundOption) {
                revealCardSound();
            }
            return {
                ...state,
                cardRevealed: { ...state.cardRevealed, [action.payload]: true }
            };
        case UI_CARD_RESET:
            return {
                ...state,
                cardRevealed: { ...state.cardRevealed, [action.payload]: false }
            };
        case UI_SOUND_TOGGLE:
            if (!state.soundOption) {
                holdCardSound();
            }
            return { ...state, soundOption: !state.soundOption };
        default:
            return state;
    }
};
