
// show icon sun/moon and a small text in daytime field
export function setDaytime(JSON, selector) {

    const dayTimeField = selector;

    const today = new Date(JSON.datetime)
        
    const getHour = today.getHours();


    if(getHour > '5' && getHour < '12') {
        dayTimeField.innerHTML = `<i class="icon-icon-sun"></i><p>Good morning<span>, it's currently</span></p>`;
    } else if (getHour > '12' && getHour < '18') {
        dayTimeField.innerHTML = `<i class="icon-icon-sun"></i><p>Good afternoon<span>, it's currently</span></p>`;
    } else {
        dayTimeField.innerHTML = `<i class="icon-icon-moon"></i><p>Good morning<span>, it's currently</span></p>`;
    }
}