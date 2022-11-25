const timeFields = document.getElementsByClassName('time');
const errorfield = document.getElementsByClassName('error')[0];

for (let timeField of timeFields) {

    let timeTag = timeField.getElementsByTagName('time')[0];

    function getTime() {
        fetch('http://worldtimeapi.org/api/timezone/Europe/Berlin')
        .then(response => {
            return response.json();
        })
        .then(response => {

            const today = new Date(response.datetime)
            const dateOptions = {
                timeStyle: 'short',
                hour12: false
            }

            errorfield.classList.add('hide');
            timeTag.innerHTML = today.toLocaleTimeString([], dateOptions);
        })
        .catch( err => {
            errorfield.classList.remove('hide');
        });
    }

    getTime();

    setInterval( function() {
        getTime();
    }, 1000);
    
}
