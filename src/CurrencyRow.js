import React from 'react'

function CurrencyRow(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    

    return (
        <div>
            <input className="input" type="number"  value={amount} onChange={onChangeAmount}/> {/* number type in input meaning only numbers can be input */} 
            <select value={selectedCurrency} onChange={onChangeCurrency}> {/*passing onchangecurrency function from props*/}
                {currencyOptions.map(options => (
                    <option key={options} value={options}>{options}</option>
                ))}
            </select>
        </div>
    )
}
export default CurrencyRow

//Initally deconstruct currencyOptions  props
//map over currencyOptions and use JSX code within map to return the options within the option tags



//onChange event to our currency row to be able to change the currency
