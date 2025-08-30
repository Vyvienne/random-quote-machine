import { useState } from 'react'
import './App.css'

const QUOTES = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
];

function getRandomIndex(exclude) {
  let indx = Math.floor(Math.random() * QUOTES.length);
  while (indx === exclude) indx = Math.floor(Math.random() * QUOTES.length);
  return indx;
}

function App() {
  const [index, setIndex] = useState(() => getRandomIndex(-1));
  const quote = QUOTES[index];
  const tweetUrl =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(`"${quote.text}" — ${quote.author}`);
  const handleNewQuote = () => {
    setIndex(getRandomIndex(index));
  };

  return (
    <div id="quote-box" className="box">
      <p id="text">“{quote.text}”</p>
      <p id="author"> — {quote.author}</p>
      <div className="actions">
        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
        <button id="new-quote" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App
