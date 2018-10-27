const test = require("ava")

require('child_process').spawn = require('mock-spawn')();

const stenode = require('./')

test("exports", t => {
    t.is(typeof stenode, "function")
})

test("resolves", async t => {
    const p = stenode("http://localhost:9999");

    t.is(typeof p.then, "function")
})
