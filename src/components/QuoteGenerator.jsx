import React from "react";
import QuotesData from "../data";
import { FaQuoteLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";


let currentQuote = "";
let currentAuthor = "";


function QuoteGenerator() {
    const generator = () => {
        const RandomIndex = Math.floor(Math.random() * QuotesData.length)
        const RandomQuote = QuotesData[RandomIndex]

        currentQuote = RandomQuote.quote;
        currentAuthor = RandomQuote.author;

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
    }
    
    
    return (
        <div className="wrapper">
           <div className="quote-box">
            <div className="quote-text">
            <FaQuoteLeft /><span id="text"></span> 
            </div>
            <div className="quote-author">- <span id="author"></span></div>
            <div className="btn-box">
                <a href="https://github.com/ElyaApyzova" className="btn-links" id="github-quote" title="My Github!" target="_blank">
                <FaGithub />
                </a>
                <a href="https://app.netlify.com/teams/elyaapyzova/sites" className="btn-links" id="instagram-quote" title="Post this quote on instagram!" target="_blank">
                <SiNetlify />
                </a>
                <button onClick={generator}>New quote</button>
            </div>
           </div>
           <div className="footer">by <a href="https://github.com/ElyaApyzova">Elnura</a></div>
        </div>
    )
}

export default QuoteGenerator;