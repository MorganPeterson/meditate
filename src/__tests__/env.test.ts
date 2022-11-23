import test from 'ava';
import { fetchEnv } from '../env';

test('Reads .env', (t) => {
  t.notThrows(() => fetchEnv());
});
