const axios = require('axios')
const api = {
    listTransactions(){
        return axios.get('http://quiet-stone-2094.herokuapp.com/transactions.json')
        .then(({
            data
        }) => data)
    }
}


module.exports = api

