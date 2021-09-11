import React, { useEffect, useState } from 'react';
import './App.css';

function App()
{
    const [ quote, setQuote ] = useState([]);
    const [ randomQuote, setRandomQuote ] = useState([]);
    useEffect(()=>{
      async function fetchData(){
        const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        const data = await response.json(); 
        const quoteslist = data.quotes; 
        setQuote(quoteslist);
        setRandomQuote(quoteslist[Math.floor(Math.random()*quoteslist.length)]);
      }
      fetchData();
    },[]);
    function randomNumber(){
      return Math.floor(Math.random()*quote.length);
    }
    const getNewQuote= () => {
      const index = randomNumber();
      setRandomQuote(quote[index])
    }
    return (
            <div id="quote-box">
              <div className="quote-text-box">
                <i className="fa fa-quote-left"></i>
                <span id="text"
                >{randomQuote['quote']}</span>
              </div>
              <div className="quote-author-box">- 
                <span id="author">{randomQuote['author']}</span>
              </div>
              <div className="buttons-box">
                <a 
                  className="button"
                  id="tweet-quote"
                  title="Tweett this Quote!"
                  target="_top"
                  href="# "
                >
                  <i className="fa fa-twitter"></i> 
                </a>
                <button 
                  className="button" 
                  id="new-quote"
                  onClick={getNewQuote}
                >New Quote
                </button>
              </div>
            </div>
    );
}

export default App