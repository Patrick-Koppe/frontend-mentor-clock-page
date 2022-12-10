// set the response from API to html fields
export function setRandomQuote(JSON, selector) {
        const textField = selector.getElementsByTagName('q')[0];
        const authorField = selector.getElementsByClassName('author')[0];

        authorField.innerHTML = JSON.author;
        textField.innerHTML = JSON.content;

}