import './theme/theme.scss';

/* components */
import './components/button/button.js';
import './components/errorfield/errorfield.js';

/* Modules */
import { initClock, IntervallClock } from './modules/clock/clock.js';
import { initQuote } from './modules/quote/quote.js';

// Quote
const quoteURL = 'https://api.quotable.io/random';
const selector = document.querySelector('.quote');
initQuote(quoteURL, selector);

/* click event */
const btnRefresh = selector.getElementsByClassName('icon-icon-refresh')[0];

btnRefresh.addEventListener('click', function() {
    initQuote(quoteURL, selector);
});

// Different API for time, timezone and location
const timeURL = 'http://worldtimeapi.org/api';
const timeZone = 'http://ip-api.com/json/?fields=status,timezone';
const location = 'http://ip-api.com/json/?fields=status,countryCode,city';

initClock(timeURL, timeZone, location);


setInterval( function() {
    IntervallClock(timeURL, timeZone, location);
}, 15000);
  