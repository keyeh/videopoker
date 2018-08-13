import { Hand } from "pokersolver";

export const destructureCard = (card) => {
    // keep only suit and value
    return (({ suit, value }) => ({ suit, value, hold: false }))(card);
};

const parseHand = (hand) => {
    // convert hand into a format that pokersolver can understand
    return Object.values(hand).map((card) => {
        let value = card.value;
        if (value == 10) value = "T";
        return `${value}${card.suit[0]}`;
    });
};
const evaluatePay = (name) => {
    switch (name) {
        case "Pair, J's":
        case "Pair, Q's":
        case "Pair, K's":
        case "Pair, A's":
            return 5;
        case "Two Pair":
            return 10;
        case "Three of a Kind":
            return 15;
        case "Straight":
            return 20;
        case "Flush":
            return 30;
        case "Full House":
            return 45;
        case "Four of a Kind":
            return 125;
        case "Straight Flush":
            return 250;
        case "Royal Flush":
            return 4000;
        default:
            return 0;
    }
};
export const evaluateHand = (hand) => {
    let solved = Hand.solve(parseHand(hand));

    switch (solved.name) {
        case "Two Pair":
        case "Three of a Kind":
        case "Straight":
        case "Flush":
        case "Full House":
        case "Four of a Kind":
        case "Straight Flush":
        case "Royal Flush":
            return { name: solved.name, win: evaluatePay(solved.name) };
        case "Pair, J's":
        case "Pair, Q's":
        case "Pair, K's":
        case "Pair, A's":
            return { name: "Jacks or Better", win: evaluatePay(solved.name) };
        default:
            return { name: "lose", win: 0 };
    }
};
