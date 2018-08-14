import { NEW_HAND, HOLD_CARD, DEAL_NEXT_CARDS } from "../actions/index";
import { destructureCard, evaluateHand, parseHand } from "../helpers";
let defaultState = {
    hand: null,
    deckData: null,
    roundEnded: false,
    handWin: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NEW_HAND:
            return {
                ...defaultState,
                hand: action.payload.hand,
                deckData: action.payload.deck,
                handWin: evaluateHand(parseHand(action.payload.hand))
            };
        case HOLD_CARD:
            let target = { ...state.hand[action.payload] };
            target.hold = !target.hold;
            return {
                ...state,
                hand: { ...state.hand, [action.payload]: target }
            };
        case DEAL_NEXT_CARDS: {
            let newHand = { ...state.hand };
            for (let key in state.hand) {
                if (!state.hand[key].hold) {
                    newHand[key] = destructureCard(state.deckData.draw());
                }
            }
            return {
                ...state,
                hand: { ...newHand },
                roundEnded: true,
                handWin: evaluateHand(parseHand(newHand))
            };
        }
        default:
            return state;
    }
};