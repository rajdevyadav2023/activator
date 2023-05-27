import React, { useEffect, useState } from 'react'
import  './quotes.css'
const Quotes = () => {
  const [quote, setQuote] = useState('Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.');
  const [num, setNum] = useState(0);


  // this function will run when user click on next button 
  function handleNext() {
    setNum(num + 1)
    // console.log(num)
  }

  // this hook will run whenever "num" value will change because we have set dependency to num 
  // we're fetching our api in useEffect Hook 
  useEffect(() => {
    async function getQuote() {
      const get = await fetch('https://api.adviceslip.com/advice');

      const res = await get.json();
      let randomQuote = res.slip.advice;
      // setQuote(res);
      setQuote(`${randomQuote}`)
      // console.log(res.slip.advice)
    }
    getQuote();
  }, [num])
  return (
    <div>
      <div className="quote-container">
        <div className="quote-box">
          <h1 className="quote-text">{quote}</h1>
        </div>
        <div className="quote-controls">
          <button className="next-btn" onClick={handleNext}>Next Quote</button>
          </div>
      </div>
      <h1> </h1>

    </div>
  )
}

export default Quotes


