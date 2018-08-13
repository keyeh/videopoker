import { NEW_HAND, HOLD_CARD, DEAL_NEXT_CARDS } from "../actions/index";
import { destructureCard } from "../helpers";
let defaultState = {
    hand: null,
    deckData: null,
    endOfRound: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NEW_HAND:
            return {
                ...defaultState,
                hand: action.payload.hand,
                deckData: action.payload.deck
            };
        case HOLD_CARD:
            let target = { ...state.hand[action.payload] };
            target.hold = !target.hold;
            return {
                ...state,
                hand: { ...state.hand, [action.payload]: target }
            };
        case DEAL_NEXT_CARDS: {
            let newHand = {};
            for (let key in state.hand) {
                if (!state.hand[key].hold) {
                    newHand[key] = destructureCard(state.deckData.draw());
                }
            }
            return {
                ...state,
                hand: { ...state.hand, ...newHand },
                endOfRound: true
            };
        }
        default:
            return state;
    }
};
