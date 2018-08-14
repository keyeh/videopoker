import { NEW_HAND, HOLD_CARD, DEAL_NEXT_CARDS } from "../actions/index";
import { evaluateHand } from "../Evaluator";
let defaultState = {
    hand: [null, null, null, null, null],
    hold: [false, false, false, false, false],
    deck: [],
    roundEnded: true,
    handWin: { name: "", win: 0 }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NEW_HAND:
            return {
                ...defaultState,
                hand: action.payload.hand,
                deck: action.payload.deck,
                roundEnded: false,
                handWin: evaluateHand(action.payload.hand)
            };
        case HOLD_CARD:
            let newHold = [...state.hold];
            newHold[action.payload] = !state.hold[action.payload];
            return {
                ...state,
                hold: newHold
            };
        case DEAL_NEXT_CARDS: {
            return {
                ...state,
                hand: action.payload.hand,
                roundEnded: true,
                handWin: evaluateHand(action.payload.hand),
                deck: action.payload.deck
            };
        }
        default:
            return state;
    }
};
