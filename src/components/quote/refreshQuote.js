const quoteFields = document.getElementsByClassName('quote');

for (let quoteField of quoteFields) {

    let textField = quoteField.getElementsByTagName('q')[0];
    let authorField = quoteField.getElementsByClassName('author')[0];
    const btnRefresh = quoteField.getElementsByClassName('icon-icon-refresh')[0];


    function setQuote() {
        authorField.innerHTML = "Please wait";
        textField.innerHTML = "Loading...";

        fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
        .then(response => {
            return response.json();
        })
        .then(response => {
            authorField.innerHTML = response.author;
            textField.innerHTML = response.en;
        })
        .catch( err => {
            authorField.innerHTML = "Please try it again";
            textField.innerHTML = "anonymous";
        });
    }


    btnRefresh.addEventListener('click', function() {
         setQuote();
    });

    setQuote();
   }