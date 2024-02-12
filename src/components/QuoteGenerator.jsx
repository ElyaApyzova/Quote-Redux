import React, { useState } from "react";
import './QuoteGenerator.css';
import QuotesData from "../data";
import { FaQuoteLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [randomColor, setRandomColor] = useState("");

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QuotesData.length);
    const randomQuote = QuotesData[randomIndex];

    setCurrentQuote(randomQuote.quote);
    setCurrentAuthor(randomQuote.author);

    const colors = [
      "#88AB8E",
      "#9BB8CD",
      "#FF90BC",
      "#7ED7C1",
      "#DC8686",
      "#776B5D",
      "#F9B572",
      "#BEADFA",
      "#FF8080",
      "#ECEE81",
      "#116A7B",
      "#867070",
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setRandomColor(randomColor);
  }

  return (
    <div className="wrapper">
      <div className="quote-box" style={{ backgroundColor: randomColor }}>
        <div className="quote-text">
          <FaQuoteLeft />
          <span id="text">{currentQuote}</span>
        </div>
        <div className="quote-author">
          - <span id="author">{currentAuthor}</span>
        </div>
        <div className="btn-box">
          <a href="https://github.com/ElyaApyzova" className="btn-links" id="github-quote" title="My Github!" target="_blank">
            <FaGithub />
          </a>
          <a href="https://app.netlify.com/teams/elyaapyzova/sites" className="btn-links" id="instagram-quote" title="Post this quote on instagram!" target="_blank">
            <SiNetlify />
          </a>
          <button onClick={generateRandomQuote}>New quote</button>
        </div>
      </div>
      <div className="footer">by <a href="https://github.com/ElyaApyzova">Elnura</a></div>
    </div>
  );
}

export default QuoteGenerator;