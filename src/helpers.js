/*eslint no-fallthrough: 0 */

import { Hand } from "pokersolver";

export const destructureCard = (card) => {
    // keep only suit and value
    return (({ suit, value }) => ({ suit, value, hold: false }))(card);
};

export const parseHand = (hand) => {
    // convert hand into a format that pokersolver can understand
    return Object.values(hand).map((card) => {
        let value = card.value;
        if (value === "10") value = "T";
        return `${value}${card.suit[0]}`;
    });
};
const evaluatePay = (name) => {
    switch (name) {
        case "Jacks or Better":
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
    let solved = Hand.solve(hand);
    switch (solved.name) {
        case "Two Pair":
        case "Three of a Kind":
        case "Straight":
        case "Flush":
        case "Full House":
        case "Four of a Kind":
            return { name: solved.name, win: evaluatePay(solved.name) };
        case "Straight Flush":
            if (solved.descr === "Royal Flush") {
                return { name: "Royal Flush", win: evaluatePay("Royal Flush") };
            } else {
                return { name: solved.name, win: evaluatePay(solved.name) };
            }
        case "Pair":
            if (
                solved.descr === "Pair, J's" ||
                solved.descr === "Pair, Q's" ||
                solved.descr === "Pair, K's" ||
                solved.descr === "Pair, A's"
            ) {
                return { name: "Jacks or Better", win: evaluatePay("Jacks or Better") };
            }
        default:
            return { name: "", win: 0 };
    }
};
