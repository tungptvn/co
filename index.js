const co = function (fn) {
    var gen = fn()
    return new Promise((reslove, reject) => {
        var queue = []

        function resume(data) {
            if (data.done) {
                reslove(Promise.all(queue))
                return
            }
            var promise = __toPromise(data.value)
            queue.push(promise)

            promise.then((rec) => {
                resume(gen.next(rec))
            }).catch(err => {
                gen.throw(err)
                reject(err)
            })

        }
        resume(gen.next())

    })

    function __toPromise(data) {
        var promise = data
        if (typeof promise === 'function') {
            promise = new Promise((reslove, reject) => {
                promise((err, rec) => {
                    if (err) reject(err)
                    reslove(rec)
                })
            })
        }
        if( typeof promise.then !== 'function' )
        promise = Promise.resolve(promise)
        return promise
    }
}
module.exports = co.default = co