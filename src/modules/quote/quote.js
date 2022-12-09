import { initRandomQuote } from '../../components/quote/initRandomQuote';

import "../../components/quote/quote.scss";

/* 
  Module to show Random quotes and a refresh button to get a new one.
*/

const quoteURL = 'https://api.quotable.io/random';

/* get API Informations */
initRandomQuote(quoteURL);


/* click event to all buttons */
const quoteFields = document.getElementsByClassName('quote');

for (let quoteField of quoteFields) {
    const btnRefresh = quoteField.getElementsByClassName('icon-icon-refresh')[0];

    btnRefresh.addEventListener('click', function() {
        initRandomQuote(quoteURL);
   });
}

