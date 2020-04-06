import test from 'ava'
import threads from 'threads'

test('should work with ESM', async t => {
  t.notThrowsAsync(async function() {
    const add = await threads.spawn(new threads.Worker("./add.mjs"))
    const result = await add(1, 1)

    t.is(result, 2)

    await threads.Thread.terminate(add)
  })
})

test('should work with CommonJS', async t => {
  t.notThrowsAsync(async function () {
    const add = await threads.spawn(new threads.Worker("./add.cjs"))
    const result = await add(1, 1)

    t.is(result, 2)
    
    await threads.Thread.terminate(add)
  })
})
