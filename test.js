const test = require("ava")
const spawn = require('mock-spawn')

require('child_process').spawn = spawn();

const stenode = require('./')

test("exports", t => {
    t.is(typeof stenode, "function")
})

test("resolves", async t => {
    const p = stenode("http://localhost:9999");

    t.is(typeof p.then, "function")
})

test("resolves with options", async t => {
    const p = stenode("http://localhost:9999", {
        cwd: __dirname
    });

    t.is(typeof p.then, "function")
})
