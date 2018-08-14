import { UI_CARD_IMAGE_LOADED } from "./index";

export const cardImageLoaded = (i) => {
    return {
        type: UI_CARD_IMAGE_LOADED,
        payload: i
    };
};
