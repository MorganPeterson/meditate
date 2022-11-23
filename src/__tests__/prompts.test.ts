import test from 'ava';
import { randomPrompt } from '../prompts';

test('prompts.ts: randomPrompt', (t) => {
  const msgs = randomPrompt();
  t.true(msgs.length === 2);
});
