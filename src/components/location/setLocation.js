export function setLocation(JSON, selector) {
    selector.innerHTML = `in ${JSON.city},${JSON.countryCode}`;
}
