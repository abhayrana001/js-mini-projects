const quotes = [
    "Believe in yourself!",
    "Every moment is a fresh beginning.",
    "Never regret anything that made you smile.",
    "Happiness depends upon ourselves."
];
function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}