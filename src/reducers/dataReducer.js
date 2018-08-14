import { NEW_HAND, HOLD_CARD, DEAL_NEXT_CARDS } from "../actions/index";
import { destructureCard, evaluateHand, parseHand } from "../helpers";
let defaultState = {
    hand: { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} },
    deckData: null,
    roundEnded: true,
    handWin: { name: "", win: 0 }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NEW_HAND:
            return {
                hand: action.payload.hand,
                deckData: action.payload.deck,
                roundEnded: false,
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
