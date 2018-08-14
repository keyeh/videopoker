import { UI_CARD_IMAGE_LOADED } from "../actions/index";
let defaultState = {
    cardImageLoaded: [false, false, false, false, false]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UI_CARD_IMAGE_LOADED:
            let temp = [...state.cardImageLoaded];
            temp[action.payload] = true;
            return {
                ...defaultState,
                cardImageLoaded: temp
            };
        default:
            return state;
    }
};
