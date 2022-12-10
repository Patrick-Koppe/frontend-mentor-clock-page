import {setRandomQuote} from './setRandomQuote';

import "./quote.scss";

/* get API inforamtion and set loading text */
export function initRandomQuote(JSON, selector) {

    // set default values for quote field
    const textField = selector.getElementsByTagName('q')[0];
    const authorField = selector.getElementsByClassName('author')[0];

    authorField.innerHTML = 'Please wait ...';
    textField.innerHTML = 'Loading ....';


    // set HTML to quote
    setRandomQuote(JSON, selector)
}