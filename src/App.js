import React from 'react';
import './App.css';
import './CurrencyRow';
import CurrencyRow from './CurrencyRow';

function App() {
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
