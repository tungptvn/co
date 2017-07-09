const co = require('../')
const fs = require('fs')
const assert = require('assert')

describe('co', function () {
    it('it should null', function (done) {
        co(function* () {
            let nil = yield null
            assert.equal(null, nil)
            done()
        })

    })
})