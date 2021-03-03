const btn = document.getElementById("btn");
const output = document.getElementById("output");
let quotes = [];
fetch("./quotes/quotes.json")
    .then(response => response.json())
    .then(data => quotes = data.quotes);
    
btn.addEventListener('click', generateRandomQuote);

// random quote api: https://api.quotable.io/random

function generateRandomQuote() {
    output.innerHTML = '';

    const randomNum = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomNum];
    let quoteDiv = document.createElement("div");
    quoteDiv.classList.add("effect");
    quoteDiv.id = "random-quote";
    let quoteTag = document.createElement("h1");
    quoteTag.classList.add("blockquote");
    let citeTag = document.createElement("h2");
    citeTag.classList.add("cite");

    let quoteText = quote.quote_text;
    let citeText = quote.quote_author;

    quoteTag.append(document.createTextNode(quoteText));
    citeTag.append(document.createTextNode(citeText));

    quoteDiv.append(quoteTag, citeTag);
    output.append(quoteDiv);
}
