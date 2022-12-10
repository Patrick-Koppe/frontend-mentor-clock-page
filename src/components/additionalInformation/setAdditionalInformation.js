export function setAdditionalInformation(JSON, selector) {
    // get infos
    const timezone = JSON.abbreviation;
    const doy = JSON.day_of_year;
    const dow = JSON.day_of_week;
    const week = JSON.week_number;


    selector.querySelector('.timezone value').innerHTML = timezone;
    selector.querySelector('.doy value').innerHTML = doy;
    selector.querySelector('.dow value').innerHTML = dow;
    selector.querySelector('.week value').innerHTML = week;
}