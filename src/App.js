import React, {Component} from 'react'
import Select from './components/Select'
import TransactionsList from './components/TransactionsList'
import logo from './logo.svg'
import './App.css'

const getTransactions = () => fetch("/transactions.json").then(res => res.json())

const getRates = () => fetch("/rates.json").then(res => res.json())


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactions: [],
            rates: [],
            sku: '',
        }

    }

    keepSku = sku => {

        this.setState({sku})

    }


    componentDidMount() {

        Promise.all([getTransactions(), getRates()])
            .then(([transactions, rates]) => {
                this.setState({transactions, rates})
            })
    }

    render() {
        const transactions = this.state.transactions
        const sku = this.state.sku
        const rates = this.state.rates
        const selectedTransactions = this.state.selectedTransactions
        return (
            <div className="App ">
                <header className="App-header">
                    <img src={logo}
                         className="App-logo"
                         alt="logo"/>
                    <h1 className="App-title uk-light">Welcome to Goliath National Bank</h1>
                </header>
                <p className="App-intro">
                    Select the Product SKU you want to see the transactions from
                </p>
                <Select transactions={transactions}
                        onSelectSku={this.keepSku}
                        value={sku}/>
                {this.state.sku  && this.state.sku !== 'Select an SKU'?

                    <TransactionsList transactions={transactions}
                                      sku={sku}
                                      rates={rates}
                                      selectedTransactions={selectedTransactions}/> : ''}
            </div>
        )
    }
}

export default App;
