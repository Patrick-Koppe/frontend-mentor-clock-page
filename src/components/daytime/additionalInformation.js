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
        
          
        })
        .catch( err => {
            errorfield.classList.remove('hide');
        });
    }

    getInformation();

}