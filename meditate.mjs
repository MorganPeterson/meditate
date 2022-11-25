import { Meditate } from './build/index.js'

const m = new Meditate()

const story = await m.createRandom()

console.log(story)

m.writeStory();
