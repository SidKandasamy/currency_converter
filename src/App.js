import React, { useEffect } from 'react';
import './App.css';
import './CurrencyRow';
import CurrencyRow from './CurrencyRow';

//https://exchangeratesapi.io/
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {

  useEffect(()=> {
      fetch(BASE_URL)
      .then(res=>res.json())
      .then(data => console.log(data))
  }, [])
  //useEffect is a function used from the react Library, pass through two arguments one empty array and the other a function
  // fetch base URL, then convert response to json
  return (
      <div>
        <h1>Cash Converter</h1>
        <CurrencyRow/>
        <div className="div">=</div>
        <CurrencyRow/>
      </div>
  );
}

export default App;
