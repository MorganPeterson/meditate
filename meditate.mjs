import { Meditate } from './build/index.js'

const m = new Meditate()

m.createPayload()
await m.createCompletion()

console.log(m.data?.choices[0]?.text)
