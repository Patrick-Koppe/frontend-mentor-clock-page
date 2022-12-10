
import "./additionalInformation.scss";
import { setAdditionalInformation } from "./setAdditionalInformation";

export function initAdditionalInformation (time, selector) {
    
    // set HTML in footer, if button show more is pressed
    setAdditionalInformation(time, selector);
}