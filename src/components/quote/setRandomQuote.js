export function setRandomQuote(JSON) {

    const quoteFields = document.getElementsByClassName('quote');

    for (let quoteField of quoteFields) {
        let textField = quoteField.getElementsByTagName('q')[0];
        let authorField = quoteField.getElementsByClassName('author')[0];

        authorField.innerHTML = JSON.author;
        textField.innerHTML = JSON.content;

    }
}