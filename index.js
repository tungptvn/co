const co = function (fn) {
    var gen = fn()

    function resume(data) {
        if (data.done) return
        var promise = __toPromise(data.value)
        promise.then((rec) => {
            resume(gen.next(rec))
        }).catch(err => gen.throw(err))
    }
    resume(gen.next())

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
        promise = Promise.resolve(promise)
        return promise
    }
}
module.exports = co.default = co