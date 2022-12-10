import { setTime } from "./setTime";
import "./time.scss";

/* get API information and set loading text */
export function initTime(timeObj, selector) {
    // set HTML for my time
    setTime(timeObj, selector);
   
}