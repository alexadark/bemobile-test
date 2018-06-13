import React from 'react'
import Total from './Total'
const uuidv1 = require('uuid/v1')



const TransactionsList = (props) => {
    const transactions = props.transactions
    const sku = props.sku
    const selectedTransactions = transactions.filter(item => item.sku === sku) || []
 return <div className="transactionsList uk-padding">
     <h3 className="uk-text-center">Transactions for SKU: {sku}</h3>
     <Total selectedTransactions = {selectedTransactions} rates ={props.rates} />
     <ul className="uk-list uk-list-striped uk-width-large uk-align-center">
        {selectedTransactions
            .map(item => <li key={uuidv1()} >
        <h4>SKU: {item.sku}  Amount: {item.amount}{item.currency}</h4>
        </li>)}
     </ul>
 </div>
}





export default TransactionsList