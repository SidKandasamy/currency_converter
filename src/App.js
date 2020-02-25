import React, { useEffect, useState } from 'react';
import './App.css';
import './CurrencyRow';
import CurrencyRow from './CurrencyRow';
import { from } from 'rxjs';

//https://exchangeratesapi.io/
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {

  //use state returns an array of options
  const [currencyOptions, setCurrencyOptions] = useState([])
  //all currency options are now inside of our list

  const [fromCurrency, setFromCurrency] = useState() //creating empty state for these two variables
  const [toCurrency, setToCurrency] = useState()

  //setting up amount

  const [amount, setAmount] = useState([1]) //want to weight changes
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  //exchange rate

  //here we just assign our exhangerate to the data.rates object in array

  const [exchangeRate, setExchangeRate] = useState()


  //variables in creating the actual outputted number to the to input

  let toAmount, fromAmount //these are then going to be passed in as props to the component
  
  if (amountInFromCurrency){
    //if the amountInFrom is true (currency is written in the first input)
    fromAmount = amount
    toAmount = amount * exchangeRate

  } else {

    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(()=> {
      fetch(BASE_URL)
      .then(res=>res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency) //sets default currency to the first currency option within the array (here we are setting state)
        setExchangeRate(data.rates[firstCurrency])
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
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleAmountChange}
        />
        <div className="div">=</div>
        <CurrencyRow
          currencyOptions={currencyOptions} //our CurrencyRow is taking in currencyOptions as props
          selectedCurrency={toCurrency} //props which are being passed through which are defined in the useEffect method
          onChangeCurrency={e => setToCurrency(e.target.value)}
          amount={toAmount} //props which are passed from the if statement variables
        />
      </div>
  );
}

export default App;

//onChnage currency gets event from the select options in Currencyrow.js, then we set the target value. this alters both states we defined earlier e.target.value is whatever the selected option is