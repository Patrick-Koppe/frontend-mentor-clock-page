const locationFields = document.getElementsByClassName('location');
const errorfield = document.getElementsByClassName('error')[0];

for (let locationField of locationFields) {


    function getLocation() {
        fetch('http://ip-api.com/json/?fields=status,countryCode,city')
        .then(response => {
            return response.json();
        })
        .then(response => {
            errorfield.classList.add('hide');
            console.log(response.city);
            locationField.innerHTML = 'in ' + response.city + ', ' + response.countryCode;
        })
        .catch( err => {
            errorfield.classList.remove('hide');
        });
    }

    getLocation();

}
