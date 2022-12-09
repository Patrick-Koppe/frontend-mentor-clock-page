import "./background.scss";

const errorfield = document.getElementsByClassName('error')[0];
const body = document.getElementsByTagName('body')[0];


    // timezone 
    // http://ip-api.com/json/?fields=status,timezone


    function getBackground() {
        fetch('http://worldtimeapi.org/api/timezone/Europe/Berlin')
        .then(response => {
            return response.json();
        })
        .then(response => {
            errorfield.classList.add('hide');
            const today = new Date(response.datetime)
        
            const getHour = today.getHours();

            if(!(getHour > '5' && getHour < '18')) {

               document.querySelector('.bg-dark').classList.remove('d-none');
               document.querySelector('.bg-light').classList.add('d-none');
               body.classList.remove('light');
               body.classList.add('dark');
            }
          
        })
        .catch( err => {
            errorfield.classList.remove('hide');
        });
    }

    getBackground();