import test from 'ava'
import { requireJSON, parseJSON } from './'
import fs from 'fs';

test('require', t => {
  const testJSON = requireJSON('test.lazy')
  t.same(typeof testJSON, 'object')
  t.end()
})

test('parse', t => {
  const testJSON = parseJSON('{//abc\n"a":1}')
  t.same(testJSON.a, 1)
  t.end()
})

test('no extenstion', t => {
  const data = `{
    // hehe
    "a": 1 // wow
  }`;
  fs.writeFileSync(__dirname + '/.whatrc', data, 'utf-8');
  const testJSON = requireJSON('.whatrc', true);
  t.same(testJSON.a, 1)
  t.end()
})
