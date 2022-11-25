const timeFields = document.getElementsByClassName('time');

for (let timeField of timeFields) {

    let abbreviationField = timeField.getElementsByClassName('abbreviation')[0];

    function getAbbreviation () {
        fetch('http://worldtimeapi.org/api/timezone/Europe/Berlin')
        .then(response => {
            return response.json();
        })
        .then(response => {
            abbreviationField.innerHTML = response.abbreviation;
        })
        .catch( err => {
           
        });
    }

    getAbbreviation ();
}
