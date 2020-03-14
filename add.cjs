const { expose } = require("threads/worker")

function add(a, b) {
  return a + b
}

expose(add)
