import { expose }  from "threads/worker"

function add(a, b) {
  return a + b
}

expose(add)
