import React from 'react'
// usd to eur = usd to cad * cad to aud * aud to eur
//cad to eur = cad to aud * aud to eur
//aud to eur OK
//rates.from x rates.rate

const Total = (props) => {
    const rates = props.rates
    const selectedtransactions = props.selectedTransactions

    const audToEurRate = rates.filter(item => item.from === 'AUD' && item.to === 'EUR')[0].rate
    const usdToCadRate = rates.filter(item => item.from === 'USD' && item.to === 'CAD')[0].rate
    const cadToAudRate = rates.filter(item => item.from === 'CAD' && item.to === 'AUD')[0].rate


    const totalCurrency = (currency) => selectedtransactions
        .filter(item => item.currency === currency)
        .map(item => Number(item.amount))
        .reduce((acc,current) => acc + current, 0)

    const eurTotal = totalCurrency('EUR')
    const audTotalInEuros = totalCurrency('AUD')*audToEurRate
    const cadTotalInEuros = totalCurrency('CAD')*cadToAudRate*audToEurRate
    const usdTotalIneuros = totalCurrency('USD')*usdToCadRate*cadToAudRate*audToEurRate

    const total = Math.round((eurTotal + audTotalInEuros + cadTotalInEuros + usdTotalIneuros) * 100) / 100



    return <div className="total uk-width-large uk-align-center">
        <div className="uk-alert-danger"
             data-uk-alert>
            <h3 className="uk-padding-small">Total in Euros: {total}€</h3>
        </div>



    </div>
}

export default Total