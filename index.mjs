import threads from 'threads'

(async () => {
  // const add = await threads.spawn(new threads.Worker("./add.cjs"))
  const add = await threads.spawn(new threads.Worker("./add.mjs"))
  const result = await add(1, 1)

  console.log("result:", result)

  await threads.Thread.terminate(add)
})()
