import {setRandomQuote} from './setRandomQuote';

export async function initRandomQuote(URL) {

    let quoteObj;
    const response = await fetch(URL)
    quoteObj = await response.json();

    // set quote api response in html
    setRandomQuote(quoteObj)
}