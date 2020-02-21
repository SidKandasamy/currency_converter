import React, { useEffect, useState } from 'react';
import './App.css';
import './CurrencyRow';
import CurrencyRow from './CurrencyRow';

//https://exchangeratesapi.io/
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {

  //use state returns an array of options
  const [currencyOptions, setCurrencyOptions] = useState([])
  //all currency options are now inside of our list

  const [fromCurrency, setFromCurrency] = useState() //creating empty state for these two variables
  const [toCurrency, setToCurrency] = useState()


  useEffect(()=> {
      fetch(BASE_URL)
      .then(res=>res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency) //sets default currency to the first currency option within the array (here we are setting state)
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
          selectedCurrency={fromCurrency}
        />
        <div className="div">=</div>
        <CurrencyRow
          currencyOptions={currencyOptions} //our CurrencyRow is taking in currencyOptions as props
          selectedCurrency={toCurrency} //props which are being passed through which are defined in the useEffect method
        />
      </div>
  );
}

export default App;
