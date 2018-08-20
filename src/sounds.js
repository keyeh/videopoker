/* globals lowLag */
export const revealCardSound = () => {
    lowLag.play("sounds/cardReveal.mp3");
};

export const holdCardSound = () => {
    lowLag.play("sounds/cardHold.mp3");
};

export const playWinSound = (id) => {
    lowLag.play(`sounds/win${id}.mp3`);
};
