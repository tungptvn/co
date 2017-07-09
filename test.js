const co = require('./')
const fs = require('fs')


co(function* () {
    // values
    let values = yield null
    console.log('values', values) //[ 'A', 'B', 'C', 'D' ]
    // from callback
  
})