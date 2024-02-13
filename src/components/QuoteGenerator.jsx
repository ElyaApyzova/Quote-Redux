import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setRandomColor } from '../action/action';
import './QuoteGenerator.css'; 
import QuotesData from "../data";
import { FaQuoteLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");
  const dispatch = useDispatch();
  const randomColor = useSelector((state) => state.randomColor);
  
  
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QuotesData.length);
    const randomQuote = QuotesData[randomIndex];
  
    setCurrentQuote(randomQuote.quote);
    setCurrentAuthor(randomQuote.author);
  
    generateRandomColor();
  };

  const generateRandomColor = () => {
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
    dispatch(setRandomColor(randomColor));
  };

  return (
    
    <body style={{ backgroundColor: randomColor }}>
    <div className="wrapper">
      <div className="quote-box">
        <div className="quote-text">
          <span className="quote-icon" style={{ color: randomColor }}><FaQuoteLeft /></span>
          <span className="text" style={{ color: randomColor }}>{currentQuote}</span>
        </div>
        <div className="quote-author" style={{ color: randomColor }}>
          - <span className="author" style={{ color: randomColor }}>{currentAuthor}</span>
        </div>
        <div className="btn-box">
          <a href="https://github.com/ElyaApyzova" className="button github-quote" title="My Github!" target="_blank" rel="noreferrer" style={{ backgroundColor: randomColor }}>
            <FaGithub />
          </a>
          <a href="https://app.netlify.com/teams/elyaapyzova/sites" className="button instagram-quote" title="Post this quote on instagram!" target="_blank" rel="noreferrer" style={{ backgroundColor: randomColor }}>
            <SiNetlify />
          </a>
          <button className="button new-quote" onClick={generateRandomQuote} style={{ backgroundColor: randomColor }}>New quote</button>
        </div>
      </div>
      <div className="footer">by <a href="https://github.com/ElyaApyzova">Elnura</a></div>
    </div>
    </body>
  );
}

export default QuoteGenerator