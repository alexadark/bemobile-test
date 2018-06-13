import React from 'react'

const Select = (props) => {
    const transactions = props.transactions
    const skuArray = transactions.map(item => item.sku)
    const skuUniq = [...new Set(skuArray)]
    return <div className="selectTransaction">

        <select className="uk-select uk-width-medium"
                onChange={e => props.onSelectSku(e.target.value)}
                value={props.value}>
            <option >Select an SKU</option>
            { skuUniq.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
}


export default Select