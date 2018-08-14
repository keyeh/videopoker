import { ADD_CREDIT, SUBTRACT_CREDIT } from "../actions/index";
let defaultState = {
    amount: 50
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CREDIT:
            return { ...state, amount: state.amount + action.payload };
        case SUBTRACT_CREDIT:
            return { ...state, amount: state.amount - action.payload };
        default:
            return state;
    }
};
