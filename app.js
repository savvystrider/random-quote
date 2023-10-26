async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const author = data.author;
    const quote = data.content;
    const tags = data.tags;
  } catch (error) {
    console.error(error);
  }
}

getQuote();
