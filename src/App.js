import React, { useEffect, useState } from 'react';
import './App.css';
import './CurrencyRow';
import CurrencyRow from './CurrencyRow';

//https://exchangeratesapi.io/
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {

  //use state returns an array of options

  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)
//all currency options are now inside of our list

  useEffect(()=> {
      fetch(BASE_URL)
      .then(res=>res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
      

      //setting currency options to the base(ENG,CZEK), from the data object, then the base property

  }, [])
  //useEffect is a function used from the react Library, pass through two arguments one empty array and the other a function
  // fetch base URL, then convert response to json
  return (
      <div>
        <h1>Cash Converter</h1>
        <CurrencyRow
          currencyOptions={currencyOptions}
        />
        <div className="div">=</div>
        <CurrencyRow
          currencyOptions={currencyOptions} //our CurrencyRow is taking in currencyOptions as props
        />
      </div>
  );
}

export default App;
