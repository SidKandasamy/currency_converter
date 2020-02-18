import React from 'react';
import './App.css';
import './CurrencyRow';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Cash Converter</h1>
       <CurrencyRow/>
      </header>
    </div>
  );
}

export default App;
