# coroutine

## use

```javascript
const co = require('co')
const fs = require('fs')
co(function* () {
    // values
    let values = yield [...'ABCD']
    console.log('values', values) //[ 'A', 'B', 'C', 'D' ]
    // from callback
    var fromCallback = yield(cb) => fs.readFile('./readme.md', 'utf-8', cb)
    console.log('fromCallback', fromCallback) // file content
    // from promise
    var fromPromise  = yield Promise.resolve( [1,2,3] )
    console.log('fromPromise', fromPromise) // [1,2,3]
    // error handle
    try {
        yield Promise.reject('message')
    } catch (error) {
        console.log('error: ', error) // error: message
    }
})
```
