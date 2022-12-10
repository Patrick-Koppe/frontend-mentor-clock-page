
import { setBackgroundImage } from "./setBackgroundImage";

import "./background.scss";

export function initBackgroundImage (time, selector) {
    
    // toggle classes for showing day and night background image
    setBackgroundImage(time, selector);
}