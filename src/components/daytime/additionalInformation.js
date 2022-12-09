import './additionalInformation.scss';

const infoFields = document.getElementsByTagName('footer');
const errorfield = document.getElementsByClassName('error')[0];

for (let infoField of infoFields) {

    function getInformation() {
        fetch('http://worldtimeapi.org/api/timezone/Europe/Berlin')
        .then(response => {
            return response.json();
        })
        .then(response => {
            errorfield.classList.add('hide');

            // get infos
            const timezone = response.abbreviation;
            const doy = response.day_of_year;
            const dow = response.day_of_week;
            const week = response.week_number;


            infoField.querySelector('.timezone value').innerHTML = timezone;
            infoField.querySelector('.doy value').innerHTML = doy;
            infoField.querySelector('.dow value').innerHTML = dow;
            infoField.querySelector('.week value').innerHTML = week;

            //dayTimeField.innerHTML = '<i class="icon-icon-sun"></i><p>Good morning</p>';
          
        })
        .catch( err => {
            errorfield.classList.remove('hide');
        });
    }

    getInformation();

}