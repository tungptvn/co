# coroutine

## install

`npm insall tungptvn/co`

## use

```javascript
const co = require('./')
const fs = require('fs')

co(function* () {
    // values
    let values = yield [...'ABCD']
    console.log('values', values) //[ 'A', 'B', 'C', 'D' ]
    // from callback
    var fromCallback = yield(cb) => fs.readFile('./readme.md', 'utf-8', cb)
    console.log('fromCallback', fromCallback) // file content
    // from promise
    var fromPromise = yield Promise.resolve([1, 2, 3])
    console.log('fromPromise', fromPromise) // [1,2,3]


}).then(rec => rec)

// error handle
co(function* () {
    var fromCallback = yield(cb) => fs.readFile('./404', 'utf-8', cb)
}).catch(err => console.log(err))

// or

co(function* () {
    try {
        var fromCallback = yield(cb) => fs.readFile('./404', 'utf-8', cb)
    } catch (error) {
        console.log(error)
    }
})
```
