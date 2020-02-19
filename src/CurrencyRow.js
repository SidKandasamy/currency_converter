import React from 'react'

function CurrencyRow(props) {

    const {
        currencyOptions
    } = props

    return (
        <div>
            <input className="input" type="number"/> {/* number type in input meaning only numbers can be input */} 
            <select>
                {currencyOptions.map(options => (
                    <option key={options} value={options}>{options}</option>
                ))}
            </select>
        </div>
    )
}
export default CurrencyRow

