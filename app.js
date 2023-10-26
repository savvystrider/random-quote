const authorDisplay = document.getElementById("author");
const quoteDisplay = document.getElementById("quote");
const labelContainer = document.getElementById("label-container");
const linkBtn = document.getElementById("link-btn");
const regroupBtn = document.getElementById("regroup-btn");

let quote = "";

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const author = data.author;
    authorDisplay.textContent = author;
    quote = data.content;
    quoteDisplay.textContent = quote;
    const tags = data.tags;
    tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.textContent = tag;
      labelContainer.appendChild(tagEl);
    });
  } catch (error) {
    console.error(error);
  }
}

async function copyQuote() {
  try {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(quote);
  } catch (error) {
    console.error(error);
  }
}

getQuote();

linkBtn.addEventListener("click", () => {
  authorDisplay.textContent = "";
  quoteDisplay.textContent = "";
  labelContainer.innerHTML = "";
  getQuote();
});

regroupBtn.addEventListener("click", copyQuote);
