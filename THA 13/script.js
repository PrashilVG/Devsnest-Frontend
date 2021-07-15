const quoteText = document.getElementById("quote-text"),
  quoteAuthor = document.getElementById("quote-author"),
  genQuoteBtn = document.getElementById("gen-new-quote");

function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `-- ${data.author}`;
    });
}

randomQuote();
genQuoteBtn.addEventListener("click", () => {
  randomQuote();
});

