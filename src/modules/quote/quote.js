import { initRandomQuote } from '../../components/quote/initRandomQuote';


// get quote and transfer it to quote component
export async function initQuote (quote, selector) {

  // get quote
  let quoteObj;
  const quoteResponse = await fetch(quote);
  quoteObj = await quoteResponse.json();

  /**** components ****/
  initRandomQuote(quoteObj, selector);
}

