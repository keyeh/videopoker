export const revealCardSound = () => {
    try {
        var audio = new Audio("sounds/cardReveal.mp3");
        audio.play();
    } catch (e) {
        return;
    }
};

export const holdCardSound = () => {
    try {
        var audio = new Audio("sounds/cardHold.mp3");
        audio.play();
    } catch (e) {
        return;
    }
};
