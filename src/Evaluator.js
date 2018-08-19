/*eslint no-fallthrough: 0 */

import { Hand } from "./pokersolver";
import PayTableData from "./PayTableData";

const evaluatePay = (name) => {
    for (let row of PayTableData) {
        if (row[0] === name.toUpperCase()) {
            return row[5]; // bet 5
        }
    }
    return NaN; // this should never happen....
};
export const evaluateHand = (hand) => {
    let solved = Hand.solve(hand);
    switch (solved.name) {
        case "Two Pair":
            return { name: solved.name, win: evaluatePay("2 PAIR") };
        case "Three of a Kind":
            return { name: solved.name, win: evaluatePay("3 OF A KIND") };
        case "Four of a Kind":
            return { name: solved.name, win: evaluatePay("4 OF A KIND") };
        case "Straight":
        case "Flush":
        case "Full House":
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
