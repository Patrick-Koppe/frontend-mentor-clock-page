import { setDaytime } from "./setDaytime";

import "./daytime.scss";

/* get API information and set loading text */
export function initDayTime(time, selector) {
    
    // set HTML for my timezone
    setDaytime(time, selector) 
}