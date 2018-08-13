export const destructureCard = (card) => {
    // keep only suit and value
    return (({ suit, value }) => ({ suit, value, hold: false }))(card)
}