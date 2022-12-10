
// show time and abbreviation
export function setTime(JSON, selector) {

   // set time
   const today = new Date(JSON.datetime)
   const dateOptions = {
       timeStyle: 'short',
       hour12: false
   }

   let timeTag = selector.getElementsByTagName('time')[0];
   let abbreviationField = selector.querySelector('.abbreviation');

   timeTag.innerHTML = today.toLocaleTimeString([], dateOptions);
   abbreviationField.innerHTML = JSON.abbreviation;
}