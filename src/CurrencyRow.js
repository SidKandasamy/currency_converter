import React from 'react'

function CurrencyRow(props) {
    return (
        <div>
            <input className="input" type="number"/> {/* number type in input meaning only numbers can be input */} 
            <select>
                <option value="Hi">Hi</option>
            </select>
        </div>
    )
}
export default CurrencyRow

