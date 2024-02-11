import React from "react";


const quote = []



function QuoteGenerator() {
    const generator = () => {
        const RandomIndex = Math.floor(Math.random() * quote.length)
        const RandomQuote = quote[RandomIndex]
    }

    return (
        <div>
            <p>Quote {}</p>
            <button onClick={generator}>Random</button>
        </div>
    )
}

export default QuoteGenerator;