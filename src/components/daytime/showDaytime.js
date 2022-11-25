const dayTimeFields = document.getElementsByClassName('daytime');
const errorfield = document.getElementsByClassName('error')[0];

for (let dayTimeField of dayTimeFields) {

    // timezone 
    // http://ip-api.com/json/?fields=status,timezone


    function getTime() {
        fetch('http://worldtimeapi.org/api/timezone/Europe/Berlin')
        .then(response => {
            return response.json();
        })
        .then(response => {
            errorfield.classList.add('hide');
            const today = new Date(response.datetime)
        
            const getHour = today.getHours();

            if(getHour > '5' && getHour < '12') {
                dayTimeField.innerHTML = '<i class="icon-icon-sun"></i><p>Good morning</p>';
            } else if (getHour > '12' && getHour < '18') {
                dayTimeField.innerHTML = '<i class="icon-icon-sun"></i><p>Good afternoon</p>';
            } else {
                dayTimeField.innerHTML = '<i class="icon-icon-moon"></i><p>Good morning</p>';
            }
          
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