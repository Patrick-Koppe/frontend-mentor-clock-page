import { initAdditionalInformation } from "../../components/additionalInformation/initAdditionalInformation";
import { initBackgroundImage } from "../../components/background/initBackgroundImage";
import { initDayTime } from "../../components/daytime/initDaytime";
import { initLocation } from "../../components/location/initLocation";
import { initTime } from "../../components/time/initTime";

// get my timezone and transfer it to clock components
export async function initClock (time, timezone, location) {
    let timeZoneObj;

    // get time zone information (e.g. Europe/Berlin)
    const timeZoneResponse = await fetch(timezone);
    timeZoneObj = await timeZoneResponse.json();

    const myTimeZone = timeZoneObj.timezone;

    // get time information for my timezone
    let timeObj;
    const myTime = `${time}/timezone/${myTimeZone}`;
    const timeResponse = await fetch(myTime);
    timeObj = await timeResponse.json();

    // get location information
    let locationObj;
    const locationResponse = await fetch(location);
    locationObj = await locationResponse.json();

    /**** components ****/
    const dayTimeField = document.querySelector('.daytime');
    const timeField = document.querySelector('.time');
    const locationField = document.querySelector('.location');
    const informationField = document.querySelector('.information');
    const backgroundImage = document.querySelector('.background-image');

    initDayTime(timeObj, dayTimeField);
    initTime(timeObj, timeField);
    initLocation(locationObj, locationField);
    initAdditionalInformation(timeObj, informationField);
    initBackgroundImage(timeObj, backgroundImage)
}

export async function IntervallClock (time, timezone) {
    let timeZoneObj;

    // get time zone information (e.g. Europe/Berlin)
    const timeZoneResponse = await fetch(timezone);
    timeZoneObj = await timeZoneResponse.json();

    const myTimeZone = timeZoneObj.timezone;

    // get time information for my timezone
    let timeObj;
    const myTime = `${time}/timezone/${myTimeZone}`;
    const timeResponse = await fetch(myTime);
    timeObj = await timeResponse.json();

    const timeField = document.querySelector('.time');

    initTime(timeObj, timeField);
}