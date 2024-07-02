const btn = document.getElementById("getbtn");

const QuoteElem = document.getElementById("quote");

// Fetching a random quote from the Quotable API
const fetchData = async () => {
  QuoteElem.innerHTML = `<p>Loading...</p>`;
  // Sending a request to the Quotable API to get a random quote
  let data = await fetch("https://api.quotable.io/random");

  // Parse the response as JSON
  let json = await data.json();

  QuoteElem.innerHTML = `<p>${json.content}</p>`;
};

btn.addEventListener("click", fetchData);

fetchData();
