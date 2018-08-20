import { evaluateHand, parseHand } from "./helpers";

it("parses hand", () => {
    let hand = {
        "0": { suit: "club", value: "7", hold: false },
        "1": { suit: "diamond", value: "10", hold: false },
        "2": { suit: "diamond", value: "J", hold: false },
        "3": { suit: "spade", value: "9", hold: false },
        "4": { suit: "diamond", value: "8", hold: false }
    };
    expect(parseHand(hand)).toEqual(["7c", "Td", "Jd", "9s", "8d"]);
});

it("evaluates Jacks or Better", () => {
    expect(evaluateHand(["4s", "As", "Jc", "Ah", "6d"])).toEqual({ name: "Jacks or Better", win: 5 });
    expect(evaluateHand(["Js", "2s", "Jc", "3h", "6d"])).toEqual({ name: "Jacks or Better", win: 5 });
});

it("evaluates Two Pair", () => {
    expect(evaluateHand(["4s", "Js", "Jc", "6h", "6d"])).toEqual({ name: "Two Pair", win: 10 });
    expect(evaluateHand(["4s", "4s", "Jc", "6h", "6d"])).toEqual({ name: "Two Pair", win: 10 });
});

it("evaluates Three of a Kind", () => {
    expect(evaluateHand(["4s", "4c", "4d", "6h", "5d"])).toEqual({ name: "Three of a Kind", win: 15 });
    expect(evaluateHand(["Ks", "Kc", "Kd", "6h", "5d"])).toEqual({ name: "Three of a Kind", win: 15 });
});

it("evaluates Straight", () => {
    expect(evaluateHand(["7c", "Td", "Jd", "9s", "8d"])).toEqual({ name: "Straight", win: 20 });
    expect(evaluateHand(["As", "2c", "3d", "4h", "5d"])).toEqual({ name: "Straight", win: 20 });
});

it("evaluates Flush", () => {
    expect(evaluateHand(["7c", "8c", "Jc", "2c", "6c"])).toEqual({ name: "Flush", win: 30 });
});

it("evaluates Full House", () => {
    expect(evaluateHand(["7c", "7d", "7s", "2c", "2d"])).toEqual({ name: "Full House", win: 45 });
});

it("evaluates Four of a Kind", () => {
    expect(evaluateHand(["7c", "7d", "7s", "7h", "2d"])).toEqual({ name: "Four of a Kind", win: 125 });
});

it("evaluates Straight Flush", () => {
    expect(evaluateHand(["7c", "8c", "9c", "6c", "5c"])).toEqual({ name: "Straight Flush", win: 250 });
    expect(evaluateHand(["Qc", "Kc", "9c", "Jc", "Tc"])).toEqual({ name: "Straight Flush", win: 250 });
});

it("evaluates Royal Flush", () => {
    expect(evaluateHand(["Tc", "Jc", "Qc", "Kc", "Ac"])).toEqual({ name: "Royal Flush", win: 4000 });
});
