import { Meditate } from './build/index.js'

const m = new Meditate()

m.buildPrompt()
m.buildRequest()
const _ = await m.createCompletion()

console.log(m.data)
